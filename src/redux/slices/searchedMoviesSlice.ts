import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface SearchMoviesSlice {
  value: {movies:number[], noResults: boolean}
}

const initialState: SearchMoviesSlice = {
  value: {movies: [], noResults: false},
}

export const moviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setSearchMovies: (state: SearchMoviesSlice, action: PayloadAction<{movies: number[], noResults: boolean}>) => {
      state.value = {movies: action.payload.movies, noResults: action.payload.noResults};
    }
  },
})

export const { setSearchMovies } = moviesSlice.actions

export const searchedMovies = (state: RootState) => state.searchedMovies.value

export default moviesSlice.reducer