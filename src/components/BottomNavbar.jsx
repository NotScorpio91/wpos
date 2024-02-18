import React,{useState} from 'react'
import { FaHome } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function BottomNavbar() {
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState(false);
    const [form, setForm] = useState(false);
    const [profile, setProfile] = useState(false);
    
    const handleDashboard = () =>{
        navigate('/dashboard');
        setDashboard(!dashboard);
    };

    const handleForm = () =>{
        navigate('/card-form');
        setForm(!form);
        
    };

    const handleProfile = () =>{
        navigate('/profile');
        setProfile(!profile);
        
    };
  return (
    <div className=' lg:hidden bg-gray-500 w-full h-fit fixed bottom-0 flex justify-around'>
      
      <FaHome className={` my-3  ${dashboard ? 'text-red-500' : 'text-black'}  `} size={30} onClick={handleDashboard}/>
      <SiReacthookform  className={` my-3 ${form ? 'text-red-500' : 'text-black'} `}size={30} onClick={handleForm}/>
      <CgProfile className={` my-3  ${profile ? 'text-red-500' : 'text-black'} `} size={30} onClick={handleProfile}/>
     
    </div>
  )
}

export default BottomNavbar
