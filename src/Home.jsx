import React from 'react';
import Button from './components/Button';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        navigate("/home");
      } else {
        // No user is signed in.
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className=" mt-14  ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-black font-bold mb-8">Wpos</h1>
        <Button title='Login' link='/login' />
      </div>
      <div className="flex items-center justify-center">
        
     
    </div>
    </div>
  );
};

export default Home;
