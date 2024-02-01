import { useSelector, useDispatch } from 'react-redux';
import { addCard, deleteCard, deleteAllCards } from '../redux/features/cardsSlice';
import Card from './Card';
import { moveCardToSecCJ } from '../redux/features/cardsSlice';
import { useEffect } from 'react';  

const CardList = () => {
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const handleJobDone = card => {
    dispatch(moveCardToSecCJ(card));
  };

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    dispatch(deleteAllCards());
    storedCards.forEach(card => dispatch(addCard(card))); 
  }, [dispatch]);

  const handleDelete = card => {
    dispatch(deleteCard(card));
  };

  return (
     <div className='grid sm:grid-cols- px-4  '>
      {cards.map(card => (
        <Card key={card.id} card={card} onDelete={() => handleDelete(card)} onJobDone={() => handleJobDone(card)} />
      ))}
    </div>
  );
};

export default CardList;
