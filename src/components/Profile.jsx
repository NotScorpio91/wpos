import React, { useState } from 'react';

function Profile() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Dropdown button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDropdown}
      >
        Click me
      </button>

      {/* Dropdown content */}
      <div className={`mt-2 ${dropdownVisible ? 'block' : 'hidden'}`}>
        <a href="#" className="block p-2 hover:bg-gray-200">Option 1</a>
        <a href="#" className="block p-2 hover:bg-gray-200">Option 2</a>
        <a href="#" className="block p-2 hover:bg-gray-200">Option 3</a>
      </div>
    </div>
  );
}

export default Profile;
