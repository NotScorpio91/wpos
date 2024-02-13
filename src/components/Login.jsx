import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photoURL} alt="Profile" />
          <button onClick={logout}>Sign Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Login;
