import React from 'react';
import Tab from '../components/Tab';
import Navbar from '../components/Navbar';
import { auth } from '../config/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';




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
    <div>
      <div className="flex flex-col items-center">
      <div 
                aria-hidden="true"
                className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div 
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40  dark:hidden ">
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
            </div>
        <h1 className="text-gray-100 font-poppins text-4xl font-bold  text-center antialiased my-10">Dashboard</h1>
  
      </div>
        <Tab />
    </div>
    <BottomNavbar />
    </>
  );
};

export default Dashboard;
