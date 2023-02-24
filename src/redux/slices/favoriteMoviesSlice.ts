import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface FavoriteMoviesSlice {
  value: {
    id: number
  }[]
}

const initialState: FavoriteMoviesSlice = {
  value: [],
}

const loadFromSessionStorage = (): FavoriteMoviesSlice => {
  const storedValue = sessionStorage.getItem("favoriteMovies");
  if (storedValue) {
    return { value: JSON.parse(storedValue) };
  }
  return initialState;
}

export const favoriteMovies = createSlice({
  name: 'favoriteMovies',
  initialState: loadFromSessionStorage(),
  reducers: {
    toggleFavoriteMovie: (state: FavoriteMoviesSlice, action: PayloadAction<{id: number}>) => {
      const { id } = action.payload;
      const alreadyExists = state.value.some(item => item.id === id);
      if (alreadyExists) {
        state.value = state.value.filter(item => item.id !== id);
        sessionStorage.setItem("favoriteMovies", JSON.stringify(state.value));
        return;
      }
      state.value.push({ id });
      sessionStorage.setItem("favoriteMovies", JSON.stringify(state.value));
    }
  },
})

export const { toggleFavoriteMovie } = favoriteMovies.actions

export const favMovies = (state: RootState) => state.favoriteMovies.value

export default favoriteMovies.reducer