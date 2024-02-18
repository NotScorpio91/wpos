import React from 'react';
import Login from './components/Login';
import { auth } from './config/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './assets/bg.png'




const Home = () => {
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

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '90vh', 
  };

  return (
    <div style={backgroundImageStyle} className='flex flex-col justify-center items-center  text-white h-fit' >
      <h1 className='text-center text-6xl font-bold bg-gradient-to-tl from-[#fc4a1a] to-[#f7b733] text-transparent bg-clip-text antialiased pb-40'>Wpos</h1>
         <Login />
    </div>
  );
};

export default Home;
