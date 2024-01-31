import React, { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('ncj');

  return (
    <div className="container mx-auto mt-8 ">
      <div className="flex space-x-4 border-b  ">
        <div
          className={`cursor-pointer      ${
            activeTab === 'ncj' ? 'text-blue-500 border- border-4 border-blue-500 ' : ''
          }`}
          onClick={() => setActiveTab('ncj')}
        >
          NCJ
        </div>
        <div
          className={`cursor-pointer   ${
            activeTab === 'sec_cj' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('sec_cj')}
        >
          SEC CJ
        </div>
      </div>

      <div className="mt-4 p-4 border border-gray-300 rounded-bl-lg rounded-br-lg">
        {activeTab === 'ncj' && (
          <div>
            {/* Content for NCJ tab */}
            <h2>NCJ Content Goes Here</h2>
          </div>
        )}

        {activeTab === 'sec_cj' && (
          <div>
            {/* Content for SEC CJ tab */}
            <h2>SEC CJ Content Goes Here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
