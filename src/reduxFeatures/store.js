import { configureStore } from '@reduxjs/toolkit';
import allGamesReducer from './allGamesSlice';

const store = configureStore({
  reducer: {
    allGames: allGamesReducer,
  },
});

export default store;
