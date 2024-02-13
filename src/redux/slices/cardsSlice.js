import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: [],
  user: null,
  isAuthenticated: false,
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
    },
    storeCards: (state, action) => {
      state.posts = action.payload;
    },

    deleteCard: (state, action) => {
       state.posts = state.posts.filter(card => card.id !== action.payload.id);
    },
    deleteAllCards: (state) => {
       state.posts = [];
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(card => card.id === action.payload);
      if (index !== -1) {
        state.posts[index].status = 1;
      }

    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = action.payload ? true : false;
    },
  },
});

export const { addCard, deleteCard, deleteAllCards,updatePost,storeCards,setUser } = cardsSlice.actions;

export default cardsSlice.reducer;