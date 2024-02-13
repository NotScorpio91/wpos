import React from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Login() {

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button type="button" onClick={signInWithGoogle} > SignIn With Google</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Login;
