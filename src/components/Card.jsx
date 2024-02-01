import { useDispatch } from 'react-redux';
import { moveCardToSecCJ } from '../redux/features/cardsSlice';
import { CiBookmarkMinus } from 'react-icons/ci';

const Card = ({ card, onDelete, onJobDone }) => {
  const dispatch = useDispatch();

 
  const handleJobDone = () => {
    console.log('Job Done button clicked for card:', card);
    dispatch(moveCardToSecCJ(card));
    onDelete(card);
    onJobDone(card);
  };


  return (
    <>
      <div className="max-w-sm h-fit  border border-gray-200 rounded-lg  bg-neutral-50  shadow-2xl shadow-gray-600/10 dark:shadow-none my-5 md:mx-5 ">
        <CiBookmarkMinus
          onClick={() => onDelete(card)}
          className=" md:absolute hidden md:block  mt-2 text-red-700 z-50"
          size={30}
        />
        <CiBookmarkMinus
          onClick={() => onDelete(card)}
          className=" block md:hidden absolute right-  mt-2 text-red-700 z-50"
          size={30}
        />

        <img className="rounded-t-lg  w-full" src={card.image} alt="Card" />

        <div className="p-5">
          <p className=" text-lg text-gray-800 font-medium mb-2">
            {card.title}
          </p>
          <p className="text-sm text-gray-600 mb-2">{card.clientName}</p>
          <p className="text-sm text-gray-800 mb-2">{card.description}</p>
          <p className="text-sm text-blue-600 mb-2">
            <span className="font-bold uppercase">Price:</span> {card.price}
          </p>
          <p className="text-sm text-green-600 mb-2">
            <span className="font-bold uppercase">Due Date:</span>{" "}
            {card.dueDate}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-bold uppercase">Created Date:</span>{" "}
            {card.createdDate}
          </p>
          <button
            type="button"
            onClick={handleJobDone}
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Job Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
