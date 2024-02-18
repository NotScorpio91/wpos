import React from 'react';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Navbar from '../components/Navbar';
import { auth } from '../config/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        navigate("/dashboard");
      } else {
        // No user is signed in.
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <Navbar />
    <div className=" mt-14  ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-black font-bold mb-8">Wpos</h1>
          <Button title='Form' link='/card-form' />
      </div>
        <Tab />
    </div>
    </>
  );
};

export default Dashboard;
