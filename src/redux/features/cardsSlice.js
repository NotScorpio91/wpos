// cardsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cards')) || [];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('cards', JSON.stringify(state));
    },
    deleteCard: (state, action) => {
      const updatedState = state.filter(card => card.id !== action.payload.id);
      localStorage.setItem('cards', JSON.stringify(updatedState));
      return updatedState;
    },
    deleteAllCards: () => {
      localStorage.removeItem('cards');
      return [];
    },
    moveCardToSecCJ: (state, action) => {
      const cardIndex = state.findIndex(card => card.id === action.payload.id);
      if (cardIndex !== -1) {
        const movedCard = state[cardIndex];
        movedCard.status = 'sec_cj';
        state.splice(cardIndex, 1);
        state.push(movedCard);
        localStorage.setItem('cards', JSON.stringify(state));
        // console.log('Updated state:', state); // Add this line for debugging
      }
    },
  }
});

export const { addCard, deleteCard, deleteAllCards, moveCardToSecCJ } = cardsSlice.actions;

export default cardsSlice.reducer;
