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
  },
});

export const { addCard, deleteCard, deleteAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
