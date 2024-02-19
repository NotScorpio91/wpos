import React from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/slices/cardsSlice";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ card, onDelete }) => {

  const dispatch = useDispatch();

  const handleUpdatePost = () => {
    dispatch(updatePost(card.id));
  };
  return (

      <div className="md:max-w-sm  w-full  h-fit  border border-gray-200 rounded-lg  bg-neutral-50  shadow-2xl shadow-gray-600/10 dark:shadow-none my-5 md:mx-5 z-50 ">
        
        <img
          className="rounded-t-lg h-[324px] w-full"
          src={card.image}
          alt="Card"
        />

        <div className="p-5">
        <MdDeleteForever
          onClick={() => onDelete(card)}
          className="  text-red-700 float-right "
          size={30}
        />
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
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleUpdatePost}>Job Done</button>
      ) : (
        <FaCheckCircle />
      )}
        </div>
      </div>
    
  );
};

export default Card;
