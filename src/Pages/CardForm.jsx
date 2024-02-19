import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/cardsSlice";
// import { deleteAllCards } from '../redux/features/cardsSlice';
import { useNavigate } from "react-router-dom";
import { db, storage } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { auth } from "../config/firebase";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

const CardForm = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const navigate = useNavigate();
  const collectionRef = collection(db, "cards");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        navigate("/card-form");
      } else {
        // No user is signed in.
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    title: "",
    description: "",
    price: "",
    dueDate: "",
    createdDate: "",
    image: "",
    status: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = () => {
    if (
      formData.clientName &&
      formData.title &&
      formData.description &&
      formData.price &&
      formData.dueDate &&
      formData.createdDate &&
      formData.image
    ) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

      dispatch(
        addCard({ ...formData, id: Date.now(), createdDate: formattedDate })
      );

      setFormData({
        clientName: "",
        title: "",
        description: "",
        price: "",
        dueDate: "",
        createdDate: formattedDate,
        image: "",
      });
      addDoc(collectionRef, {
        title: formData.title,
        clientName: formData.clientName,
        description: formData.description,
        price: formData.price,
        dueDate: formData.dueDate,
        createdDate: formData.createdDate,
        status: 0,
      });
      if (!formData.image) return;
      const filesFolderRef = ref(storage, `Data/${formData.title}`);
      try {
        uploadBytes(filesFolderRef, formData.image);
      } catch (err) {
        console.error(err);
      }
      navigate("/dashboard");
    } else {
      setErrorMessage("All fields are required");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    setFormData({ ...formData, createdDate: formattedDate });
  }, []);

  return (
    <>
      <Navbar />
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
      <div className="lg:flex lg:justify-center lg:mb-0 mb-16 font-roboto antialiased">
        <div className=" px-4 mt-12 lg:w-[1200px] ">
          <h1 className="text-gray-100 font-poppins text-4xl font-bold  text-center antialiased my-10">Form</h1>
          {errorMessage && (
            <div
              className="flex w-fit  items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50  dark:text-blue-400 transition-all sm:absolute sm:top-24"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Info alert!</span> {errorMessage}
              </div>
            </div>
          )}

          <div className="mb-4 flex flex-col gap-5 lg:grid lg:grid-cols-2">
            <div className="z-50">
              <label className="block text-white mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="text-sm rounded-[5px]  block w-full  py-3 px-[14px] shadow-sm bg-[#0A0A0A]  text-white  placeholder-[#9E9E9E] outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 "
                placeholder="Title..."
              />
            </div>
            <div className="z-50">
              <label className="block text-white mb-1">Client Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                required
                className="text-sm rounded-[5px]  block w-full  py-3 px-[14px] shadow-sm bg-[#0A0A0A]  text-white  placeholder-[#9E9E9E] outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 "
                placeholder="Client name..."
              />
            </div>

            <div className="z-50">
              <label className="block text-white mb-1">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="text-sm rounded-[5px]  block w-full  py-3 px-[14px] shadow-sm bg-[#0A0A0A]  text-white  placeholder-[#9E9E9E] outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 "
                placeholder="Description..."
              />
            </div>
            <div className="z-50">
              <label className="block text-white mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="text-sm rounded-[5px]  block w-full  py-3 px-[14px] shadow-sm bg-[#0A0A0A]  text-white  placeholder-[#9E9E9E] outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 "
                placeholder="Price..."
              />
            </div>
            <div className="z-50">
              <label className="block text-white mb-1">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                required
                className="text-sm rounded-[5px]  block w-full  py-3 px-[14px] shadow-sm bg-[#0A0A0A]  text-white  placeholder-[#9E9E9E] outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 "
              />
            </div>
            <div className="z-50">
              <label className="block text-white mb-1">Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                required
                className=" text-sm rounded-[5px]  block w-full  py-[10px] px-[14px] bg-[#0A0A0A] text-white outline-none focus:outline-none focus:border-blue-500 focus:border focus:border-1 
                                            

                 file:text-white file:bg-black font-medium file:rounded-md file:sm:text-sm file:text-xs    file:antialiased file:px-[30px] file:py-2 transition-all file:dark:text-white file:dark:bg-gradient-to-r file:from-blue-500
                 file:via-blue-600 file:to-blue-700 file:cursor-pointer file:border-none file:mr-2 sm:file:mr-3 "
              />
            </div>
          </div>
          <div className="flex justify-between md:justify-start pt-2 pb-5 ">
            <div className="z-50">
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  font-roboto font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default CardForm;
