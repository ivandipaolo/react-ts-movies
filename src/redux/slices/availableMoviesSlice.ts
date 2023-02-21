import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface MoviesState {
  value: number[]
}

const initialState: MoviesState = {
  value: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state: MoviesState, action: PayloadAction<number[]>) => {
      state.value = [...new Set(state.value.concat(action.payload))]
    }
  },
})

export const { addMovies } = moviesSlice.actions

export const selectedMovies = (state: RootState) => state.availableMovies.value

export default moviesSlice.reducer