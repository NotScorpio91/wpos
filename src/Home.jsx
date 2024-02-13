import React from 'react';
import Button from './components/Button';
import Login from './components/Login';


const Home = () => {
  return (
    <div className=" mt-14  ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-black font-bold mb-8">Wpos</h1>
        <Button title='Home Page' link='/home' />
      </div>
      <div className="flex items-center justify-center">
        
      <Login />
    </div>
    </div>
  );
};

export default Home;
