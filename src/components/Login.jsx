import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from '../redux/slices/cardsSlice';
import { useDispatch } from 'react-redux';
import { auth, googleProvider } from "../config/firebase";
import { FcGoogle } from "react-icons/fc";
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
    <div className="absolute bottom-0 backdrop-blur-xl   bg-white/40  h-44 w-full rounded-t-2xl py-8 px-6 border border-white/40 shadow">
      <h1 className="text-center text-2xl text-gray-600">Great to see you again!</h1>
      <div className="flex items-center justify-center  mt-5  rounded-lg bg-[#4285F4] hover:bg-[#4285F4]/90  ">
        <button className="px-4 py-2 border flex gap-2 text-black hover:shadow transition duration-150 border-none" onClick={signInWithGoogle}>
        <FcGoogle size={25} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
