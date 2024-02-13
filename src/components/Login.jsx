import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from '../redux/slices/cardsSlice';
import { useDispatch } from 'react-redux';
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithPopup,
} from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
        navigate("/home");
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
      dispatch(setUser(user));
    } catch (err) {
      console.error(err);
    }
  };

 

  return (
    <div>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Login;
