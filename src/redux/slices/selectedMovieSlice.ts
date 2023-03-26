import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface SelectedMovieState {
  value: number
}

const initialState: SelectedMovieState = {
  value: 0,
}

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectSelectedMovie: (state: SelectedMovieState, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

export const { setSelectSelectedMovie } = selectedMovieSlice.actions

export const selectSelectedMovie = (state: RootState) => state.selectedMovie.value

export default selectedMovieSlice.reducer
