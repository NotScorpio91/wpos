import React, { useState } from 'react';
import CardList from './CardList'
import { MdOutlineWorkOff } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";


const Tab = () => {
  const [activeTab, setActiveTab] = useState('ncj');

  return (
    <div className=" mx-auto mt-8  ">
      <div className="flex justify-center space-x-4    ">
        <div
          className={`cursor-pointer  border-white text-white      ${
            activeTab === 'ncj' ? 'text-blue-500 border-blue-500  border-b-2 font-semibold ' : ''
          }`}
          onClick={() => setActiveTab('ncj')}
        >
          <MdOutlineWorkOff className={`cursor-pointer  border-white text-white    ${
            activeTab === 'ncj' ? 'text-blue-500 border-blue-500  border-b-2 font-semibold ' : ''
          }`}  />NCJ
        </div>
        <div
          className={`cursor-pointer  border-white text-white    ${
            activeTab === 'sec_cj' ? 'text-blue-500 border-blue-500  border-b-2 font-semibold ' : ''
          }`}
          onClick={() => setActiveTab('sec_cj')}
        >
           <MdOutlineWorkOutline className={`cursor-pointer  border-white text-white    ${
            activeTab === 'sec_cj' ? 'text-blue-500 border-blue-500  border-b-2 font-semibold ' : ''
          }`}  />SEC CJ
        </div>
      </div>

      <div className=" mt-2 ">
        {activeTab === 'ncj' && (
          <div>
            {/* Content for NCJ tab */}
            <CardList />
          </div>
        )}

        {activeTab === 'sec_cj' && (
          <div>
            {/* Content for SEC CJ tab */}
            <h2 className='text-center'>SEC CJ Content Goes Here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;