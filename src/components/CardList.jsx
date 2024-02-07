import React,{useState,useEffect} from 'react';
import Card from './Card';
import { db} from "../config/firebase";
import {
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";


const CardList = ({list}) => {
  
  const moviesCollectionRef = collection(db, "cards");

  const deleteCard = async (id) => {
    const cardDoc = doc(db, "cards", id);
    await deleteDoc(cardDoc);
  };


  return (
    <div className='grid sm:grid-cols-2 sm:space-x-4 md:flex-col md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 justify-center items-center '>
      {list?.map(card => (
        <Card key={card.id} card={card}  onDelete={() => deleteCard(card.id)} />
      ))}
    
    </div>
  );
};

export default CardList;