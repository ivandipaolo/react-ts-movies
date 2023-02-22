import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import detailedMoviesSlice from '@/redux/slices/detailedMoviesSlice';
import moviesSlice from '@/redux/slices/availableMoviesSlice';

export const store = configureStore({
  reducer: {
    detailedMovies: detailedMoviesSlice,
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
