import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import genresSlice from './slices/genresSlice';
import moviesSlice from './slices/availableMoviesSlice';

export const store = configureStore({
  reducer: {
    genres: genresSlice,
    availableMovies: moviesSlice
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
