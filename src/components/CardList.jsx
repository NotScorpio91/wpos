import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard } from '../redux/features/cardsSlice';
import Card from './Card';

const CardList = () => {
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const handleDelete = card => {
    dispatch(deleteCard(card));
  };



  return (
    <div className='grid sm:grid-cols-4 px-4 '>
      {cards.map(card => (
        <Card key={card.id} card={card} onDelete={() => handleDelete(card)} />
      ))}
    
    </div>
  );
};

export default CardList;
