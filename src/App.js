import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";

// firebase imports
import { doc, getFirestore } from "firebase/firestore";
import {
  useFirestoreDocData,
  useFirestore,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

function BurritoTaste() {
  // easily access the Firestore library
  const burritoRef = doc(useFirestore(), "tryreactfire", "burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
}

function App() {
  //   const user = false;
  //
  //   return <div className="w-full h-full">{user ? <ChatRoom /> : <Login />}</div>;

  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <h1>🌯</h1>
      <BurritoTaste />
    </FirestoreProvider>
  );
}

export default App;
