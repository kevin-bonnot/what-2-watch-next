import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import Movie, {movieEquals} from '@/models/Movie';

interface FavoritesState {
  value: Movie[];
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: []
  } as FavoritesState,
  reducers: {
    addOrRemoveFavorite: (state, action: PayloadAction<Movie>) => {
      const index = state.value.findIndex(movie => movieEquals(movie, action.payload));
      console.log(index);
      if (index >= 0) {
        state.value.splice(index, 1);
      } else {
        state.value[state.value.length] = action.payload;
      }
    }
  }
});

export const { addOrRemoveFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.value;

export default favoritesSlice.reducer;
