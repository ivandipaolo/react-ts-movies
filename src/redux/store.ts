import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import detailedMoviesSlice from '@/redux/slices/detailedMoviesSlice';
import moviesSlice from '@/redux/slices/availableMoviesSlice';
import selectedMovieSlice from '@/redux/slices/selectedMovieSlice';
import searchValueSlice from '@/redux/slices/searchValueSlice';

export const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieSlice,
    detailedMovies: detailedMoviesSlice,
    availableMovies: moviesSlice,
    searchValue: searchValueSlice
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
