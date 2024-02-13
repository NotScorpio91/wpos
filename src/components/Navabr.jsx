import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";


function Navabr() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
     
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Wpos
          </span>
        </a>
        {user ? (
        <>
          <div className="flex items-center justify-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse gap-2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full border"
            />
            <div className="text-white">{user.displayName}</div>
            <IoMdArrowDropdown
              className={`text-white transition-all ${
                dropdownVisible ? "rotate-180" : "rotate-0"
              }`}
              onClick={toggleDropdown}
            />
            <div
              className={`mt-2 absolute top-12  bg-gray-500 rounded-sm  ${
                dropdownVisible ? "block" : "hidden"
              }`}
            >
              <div
                className="block p-2 cursor-pointer hover:bg-gray-200"
                onClick={logout}
              >
                Logout
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/home">
              <div className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </div>
            </Link>

            <Link to="/card-form">
              <div className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Form
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navabr;
