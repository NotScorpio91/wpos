import React from "react";
import { CiBookmarkMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/slices/cardsSlice";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ card, onDelete }) => {

  const dispatch = useDispatch();
  console.log(card);

  const handleUpdatePost = () => {
    dispatch(updatePost(card.id));
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
          className=" block md:hidden absolute   mt-2 text-red-700 z-50"
          size={30}
        />

        <img
          className="rounded-t-lg h-[324px] w-full"
          src={card.image}
          alt="Card"
        />

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
          {card.status === 0 ? (
          <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleUpdatePost}>Job Done</button>
      ) : (
        <FaCheckCircle />
      )}
        </div>
      </div>
    </>
  );
};

export default Card;
