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

  const handleDeleteAll = () => {
    dispatch(deleteAllCards());
  };

  useEffect(() => {
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    setFormData({ ...formData, createdDate: formattedDate });
  }, []);

  return (
    <div className=" px-4">
      {errorMessage && (
        <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
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
        <label className="block text-black mb-1">Client Name</label>
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
        <label className="block text-black mb-1">Title</label>
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
        <label className="block text-black mb-1">Description</label>
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
        <label className="block text-black mb-1">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Due Date</label>
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
        <label className="block text-black mb-1">Created Date</label>
        <input
          type="text"
          name="createdDate"
          value={formData.createdDate}
          onChange={handleInputChange}
          readOnly 
          required
          className="w-full border rounded-md py-1 px-2 bg-gray-100"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Image</label>
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
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-700">
          Add Card
        </button>
      </div>
      {cards.length > 0 && (
        <div className="px-0 md:px-4">
          <button onClick={handleDeleteAll} className="bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-red-700">
            Delete All Cards
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default CardForm;
