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
    <div className=' lg:hidden bg-[#0B0B0C] w-full h-fit fixed bottom-0 flex justify-around z-50'>
      
      <FaHome className={` my-3  ${dashboard ? 'text-blue-500' : 'text-white'}  `} size={30} onClick={handleDashboard}/>
      <SiReacthookform  className={` my-3 ${form ? 'text-blue-500' : 'text-white'} `}size={30} onClick={handleForm}/>
      <CgProfile className={` my-3  ${profile ? 'text-blue-500' : 'text-white'} `} size={30} onClick={handleProfile}/>
     
    </div>
  )
}

export default BottomNavbar
