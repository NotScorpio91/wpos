import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.posts = [
        ...state.posts,
        action.payload
      ];
      console.log(state);
    },
    deleteCard: (state, action) => {
      return state.posts.filter(card => card.id !== action.payload.id);
    },
    deleteAllCards: (state) => {
      return state.posts = [];
    },
  
  },
});

export const { addCard, deleteCard, deleteAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;