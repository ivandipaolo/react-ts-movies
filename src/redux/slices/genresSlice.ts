import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface GenresState {
  value: {
    id: number,
    genres: string[]
  }[]
}

const initialState: GenresState = {
  value: [],
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    addGenres: (state: GenresState, action: PayloadAction<{id: number, genres: string[]}>) => {
      const { id, genres } = action.payload;
      const alreadyExists = state.value.some(item => item.id === id);
      if (alreadyExists) return;
      state.value.push({ id, genres });
    }
  },
})

export const { addGenres } = genresSlice.actions

export const selectedGenre = (state: RootState) => state.genres.value

export default genresSlice.reducer