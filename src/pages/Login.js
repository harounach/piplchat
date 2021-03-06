import React from "react";
import Logo from "../logo.svg";

import { useAuth, useFirebaseApp } from "reactfire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const firebaseApp = useFirebaseApp();
  const auth = useAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-indigo-900">
      <header className="w-full h-20 flex items-center justify-between px-4 mb-4">
        <div>
          <img className="w-20" src={Logo} alt="Logo" />
        </div>
      </header>
      <main className="w-full flex-grow flex justify-center items-start p-2">
        <div className="w-6/12 shadow-md bg-white rounded-lg p-4 flex flex-col items-center">
          <h1 className="text-3xl">Login To PiplChat</h1>
          <p className="text-base text-gray-500 text-center my-8">
            Login to the app and start chatting with your friends
          </p>
          <button
            className="px-4 py-2 bg-yellow-400 rounded-md shadow-md"
            onClick={handleGoogleSignIn}
          >
            Sign In with Google
          </button>
        </div>
      </main>
      <footer className="h-20">
        <p className="text-center text-white">Copyright Haroun Ach 2021</p>
      </footer>
    </div>
  );
};

export default Login;
