import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface SearchMoviesSlice {
  value: number[]
}

const initialState: SearchMoviesSlice = {
  value: [],
}

export const moviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setSearchMovies: (state: SearchMoviesSlice, action: PayloadAction<number[]>) => {
      state.value = [...new Set(state.value.concat(action.payload))]
    }
  },
})

export const { setSearchMovies } = moviesSlice.actions

export const searchedMovies = (state: RootState) => state.searchedMovies.value

export default moviesSlice.reducer