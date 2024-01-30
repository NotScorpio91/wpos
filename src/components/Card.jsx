import React from "react";

const Card = ({ card, onDelete }) => {
  return (
    <>
      <div className="max-w-sm  border border-gray-200 rounded-lg  bg-neutral-50  shadow-2xl shadow-gray-600/10 dark:shadow-none ">
        <a href="#">
          <img className="rounded-t-lg" src={card.image} alt="Card" />
        </a>
        <div className="p-5">
          <p className="text-lg text-gray-800 font-medium mb-2"><span className="text-gray-700 font-bold uppercase">Name:</span>{card.clientName}</p>    
          <p className="text-sm text-gray-600 mb-2"><span className="font-bold uppercase">Title:</span>{card.title}</p>
          <p className="text-sm text-gray-800 mb-2"><span className="font-bold uppercase">Des:</span>{card.description}</p>
          <p className="text-sm text-blue-600 mb-2"><span className="font-bold uppercase">Price:</span> {card.price}</p>       
          <p className="text-sm text-green-600 mb-2">
          <span className="font-bold uppercase">Due Date:</span> {card.dueDate}
          </p>
          <p className="text-sm text-gray-500 mb-2">
          <span className="font-bold uppercase">Created Date:</span> {card.createdDate}
          </p>
          <button onClick={() => onDelete(card)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete Card</button>
        </div>
      </div>
    </>
  );
};

export default Card;
