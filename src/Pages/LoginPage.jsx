import React from 'react'
import Login from '../components/Login';
import { auth } from '../config/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        navigate("/home");
      } else {
        // No user is signed in.
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mt-20 text-white'>LoginPage
         <Login />
    </div>
  )
}

export default LoginPage