import React from 'react';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Navbar from '../components/Navabr';


const HomePage = () => {
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

export default HomePage;
