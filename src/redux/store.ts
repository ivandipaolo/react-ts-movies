import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesSlice from '@/redux/slices/availableMoviesSlice';
import detailedMoviesSlice from '@/redux/slices/detailedMoviesSlice';
import selectedMovieSlice from '@/redux/slices/selectedMovieSlice';
import searchedMoviesSlice from '@/redux/slices/searchedMoviesSlice';
import favoriteMoviesSlice from '@/redux/slices/favoriteMoviesSlice';

export const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieSlice,
    detailedMovies: detailedMoviesSlice,
    availableMovies: moviesSlice,
    favoriteMovies: favoriteMoviesSlice,
    searchedMovies: searchedMoviesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
