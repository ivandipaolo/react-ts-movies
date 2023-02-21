import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface GenresState {
  value: string[]
}

const initialState: GenresState = {
  value: [],
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    addGenres: (state: GenresState, action: PayloadAction<string[]>) => {
      state.value = [...new Set(state.value.concat(action.payload))]
    }
  },
})

export const { addGenres } = genresSlice.actions

export const selectedGenre = (state: RootState) => state.genres.value

export default genresSlice.reducer