import React, {useState} from 'react'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { IoExitOutline } from "react-icons/io5";
import { setUser } from '../redux/slices/cardsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from "firebase/auth";
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';


function Profile() {

   
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          setUser(user);
          navigate('/profile');
        } else {
          // No user is signed in.
          setUser(null);
          navigate('/');
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const logout = async () => {
      try {
        await signOut(auth);
        navigate("/");
        dispatch(setUser(null));
      } catch (err) {
        console.error(err);
      }
    };

    return (
        <>
        <Navbar />
        <div className='lg:flex lg:flex-col lg:justify-center  lg:items-center antialiased font-roboto'>
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
        <div className='px-2 flex flex-col items-center lg:w-[1000px] '>
            <div className="text-gray-100 font-poppins text-4xl font-bold  text-center antialiased my-10">Profile</div>
            {user ? (
            <>
            <div className="w-full h-28 rounded-lg mt-16 flex flex-col justify-around items-center bg-gradient-to-r from-primary-black to-black text-white  border border-primary-black  ">
                <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 relative -top-10  " src={user.photoURL} alt="Profile" />
                <p className='text-center text-2xl relative -top-6 '>{user.displayName}</p>
            </div>
            </>
             ) : (
                <></>
              )}
            <div className="w-full mt-5 z-50">
                <button type="button" className="justify-center  text-gray-900 bg-gray-100 hover:bg-gray-200   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 w-full " onClick={toggleDropdown}>
                <IoExitOutline />
                    Logout
                </button>
                {isDropdownVisible && (
                    
                <div className="flex-1 justify-end  w-full fixed left-0  bottom-0 z-50  ">
                    <div className=" h-60 w-full rounded-t-2xl py-8 px-6 shadow  bg-gradient-to-r from-primary-black to-black text-white  border border-primary-black ">
                        <div className="flex flex-col gap-2 ">
                            <p className="font-bold text-white text-xl">
                                Logout Alert!
                            </p>
                            <p className="text-base text-white">
                                Are you sure you want to logout?
                            </p>
                            <div className="flex flex-row pt-4 ">
                                <div
                                    className="bg-white flex flex-row text-center justify-center items-center rounded-full py-3 px-5 cursor-pointer"
                                    type="button"
                                    onClick={toggleDropdown}>
                                    <p className="text-black">Cancel</p>
                                </div>
                                <div
                                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 ml-3 flex flex-row text-center justify-center items-center rounded-full py-3 px-5 cursor-pointer"
                                    type="button"
                                    onClick={logout}
                                 >
                                    <p className="text-white font-bold">
                                        Yes, Logout
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                 )}
            </div>
             
        </div>
        </div>
        <BottomNavbar />
        </>
    )
}

export default Profile
