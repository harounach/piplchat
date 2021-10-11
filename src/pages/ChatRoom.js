import React, { useState } from "react";
import Logo from "../logo.svg";

import Message from "../components/Message";
import { Loader } from "../components/Loader";

// firebase
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  useAuth,
  useFirebaseApp,
  useFirestore,
  useUser,
  useFirestoreCollectionData,
} from "reactfire";

const ChatRoom = () => {
  // message state
  const [message, setMessage] = useState("");

  // firebase app
  const firebaseApp = useFirebaseApp();

  // firebase auth
  const auth = useAuth(firebaseApp);

  // user
  const { data: user } = useUser(auth);

  // firestore instance
  const firestore = useFirestore();

  const collectRef = collection(firestore, "messages");

  const messagesQuery = query(collectRef, orderBy("createdAt", "asc"));

  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, {
    idField: "id",
  });

  console.log(messages);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      try {
        await addDoc(collectRef, {
          name: user.displayName,
          message,
          uid: user.uid,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error(error);
      }
    }

    setMessage("");
  };

  const isRecepient = (currentUID, UID) => {
    return currentUID !== UID;
  };

  const chatRoomBody =
    status === "loading" ? (
      <Loader />
    ) : (
      messages.map((messageEntry) => {
        return (
          <Message
            key={messageEntry.id}
            messageEntry={messageEntry}
            recepient={isRecepient(user.uid, messageEntry.uid)}
          />
        );
      })
    );

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <header className="w-full h-20 flex items-center justify-between px-4 bg-indigo-900 mb-4">
        <div>
          <img className="w-20" src={Logo} alt="Logo" />
        </div>
        <button
          className="px-4 py-2 bg-yellow-400 rounded-md shadow-md"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </header>
      <main className="w-full flex-grow flex justify-center items-start p-2">
        <div className="w-8/12 shadow-md bg-white rounded-lg p-4 flex flex-col items-center gap-4">
          {chatRoomBody}
        </div>
      </main>
      <div className="flex justify-center p-4 bg-indigo-900">
        <form className="w-6/12 flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="px-4 py-2 bg-white rounded-md shadow-md flex-grow w-24"
            value={message}
            onChange={onInputChange}
            placeholder="How are you?"
          />
          <button className="px-4 py-2 ml-2 bg-yellow-400 rounded-md shadow-md ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
