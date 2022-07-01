import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const urlApi = 'https://www.scorebat.com/video-api/v3/feed/?token=';
const myToken = 'MjEwODdfMTY1NjQwNDIxN19jYWY0ZWNhZTEyZWVkYTc1Njk4YmJjZTZhMThhODBjNTg4MzUwMDcz';

export const fetchAllGames = createAsyncThunk('allGames/fetchAllGames',
  async () => {
    const res = await fetch(`${urlApi}${myToken}`);
    const data = res.json();
    const gamesList = await data;
    const gamesData = gamesList.response;
    const games = gamesData.map((game) => ({
      id: game.videos[0].id,
      title: game.title,
      competition: game.competition,
      date: game.date.slice(0, 10),
      time: game.date.slice(11, 16),
    }));
    return games;
  });

const options = {
  name: 'allGames',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllGames.fulfilled]: (state, action) => action.payload,
  },
};
const allGamesSlice = createSlice(options);
export default allGamesSlice.reducer;
export const selectAllGames = (state) => state.allGames;
