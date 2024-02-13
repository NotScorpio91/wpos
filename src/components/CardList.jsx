import React from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/slices/cardsSlice';
import { db} from "../config/firebase";
import {
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";


const CardList = ({list}) => {

  const dispatch = useDispatch();

  const Delete = card => {
  };
  
  const collectionRef = collection(db, "cards");

  const handleDelete = async (id) => {
    dispatch(deleteCard(id));

    const cardDoc = doc(db, "cards", id);
    await deleteDoc(cardDoc);
  };

  


  return (
    <div className='grid sm:grid-cols-2 sm:space-x-4 md:flex-col md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 justify-center items-center '>
      {list?.map(card => (
        <Card key={card.id} card={card}  onDelete={() => handleDelete(card.id)} />
      ))}
    
    </div>
  );
};

export default CardList;