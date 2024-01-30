import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-black font-bold mb-8">Wpos</h1>
        <Link to="/card-form">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Go to Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
