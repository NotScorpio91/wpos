import React from 'react';

const Card = ({ card, onDelete }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4 mb-4">
      <img src={card.image} alt="Card" className="mb-4 w-full h-40 object-cover" />
      <p className="text-lg font-semibold mb-2">{card.clientName}</p>
      <p className="text-sm text-gray-600 mb-2">{card.title}</p>
      <p className="text-sm text-gray-800 mb-2">{card.description}</p>
      <p className="text-sm text-blue-600 mb-2">Price: {card.price}</p>
      <p className="text-sm text-green-600 mb-2">Due Date: {card.dueDate}</p>
      <p className="text-sm text-gray-500 mb-2">Created Date: {card.createdDate}</p>
      <button
        onClick={() => onDelete(card)}
        className="bg-red-500 text-white py-1 px-3 rounded-full focus:outline-none hover:bg-red-700"
      >
        Delete Card
      </button>
    </div>
  );
};

export default Card;
