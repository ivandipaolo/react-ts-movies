import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface DetailedMoviesState {
  value: {
    id: number,
    name: string,
    genres: string[]
  }[]
}

const initialState: DetailedMoviesState = {
  value: [],
}

export const detailedMovies = createSlice({
  name: 'detailedMovies',
  initialState,
  reducers: {
    addDetailedMovie: (state: DetailedMoviesState, action: PayloadAction<{id: number, genres: string[], name: string}>) => {
      const { id, genres, name } = action.payload;
      const alreadyExists = state.value.some(item => item.id === id);
      if (alreadyExists) return;
      state.value.push({ id, genres, name });
    }
  },
})

export const { addDetailedMovie } = detailedMovies.actions

export const selectedGenre = (state: RootState) => state.detailedMovies.value

export default detailedMovies.reducer