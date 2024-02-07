import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/slices/cardsSlice';
import Card from './Card';

const CardList = ({list}) => {
  
  const dispatch = useDispatch();
  const handleDelete = card => {
    dispatch(deleteCard(card));
  };

 


  return (
    <div className='grid sm:grid-cols-2 sm:space-x-4 md:flex-col md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 justify-center items-center '>
      {list?.map(card => (
        <Card key={card.id} card={card}  onDelete={() => handleDelete(card)} />
      ))}
    
    </div>
  );
};

export default CardList;