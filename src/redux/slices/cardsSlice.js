import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      return state.filter(card => card.id !== action.payload.id);
    },
    deleteAllCards: (state) => {
      return [];
    },
  },
});

export const { addCard, deleteCard, deleteAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;