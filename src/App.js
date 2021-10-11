import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";

// firebase imports

import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

import {
  FirestoreProvider,
  useFirebaseApp,
  AuthProvider,
  useAuth,
  useUser,
} from "reactfire";

function MyApp(props) {
  const auth = useAuth();
  const { data: user } = useUser(auth);

  return <div className="w-full h-full">{user ? <ChatRoom /> : <Login />}</div>;
}

function App() {
  const firebaseApp = useFirebaseApp();
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <MyApp />
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
