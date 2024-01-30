import { useSelector, useDispatch } from 'react-redux';
import { addCard, deleteCard, deleteAllCards } from '../redux/features/cardsSlice';
import Card from './Card';
import { useEffect } from 'react';  

const CardList = () => {
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    dispatch(deleteAllCards());
    storedCards.forEach(card => dispatch(addCard(card))); 
  }, [dispatch]);

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
