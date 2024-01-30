import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../redux/features/cardsSlice';
import { deleteAllCards } from '../redux/features/cardsSlice';

const CardForm = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    clientName: '',
    title: '',
    description: '',
    price: '',
    dueDate: '',
    createdDate: '', 
    image: '',
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
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      
      dispatch(addCard({ ...formData, id: Date.now(), createdDate: formattedDate }));

      setFormData({
        clientName: '',
        title: '',
        description: '',
        price: '',
        dueDate: '',
        createdDate: formattedDate,
        image: '',
      });
    } else {
      setErrorMessage('All fields are required');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };



  useEffect(() => {
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    setFormData({ ...formData, createdDate: formattedDate });
  }, []);

  return (
    <div className=" px-4 mt-12">
      <h1 className='text-center  my-16 text-5xl text-neutral-100'>Wpos</h1>
      {errorMessage && (
        <div class="flex w-fit  items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50  dark:text-blue-400 transition-all sm:absolute sm:top-24" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Info alert!</span> {errorMessage}
        </div>
      </div>
        
      )}
      
      <div className='mb-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Client Name</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-white mb-1">Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      </div>
      <div className='flex justify-between md:justify-start pt-2 pb-5 '>
      <div className="">
        <button onClick={handleSubmit} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br    shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Card</button>
      </div>
      
      </div>
    </div>
  );
};

export default CardForm;
