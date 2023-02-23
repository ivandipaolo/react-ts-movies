import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface SearchValueState {
  value: string
}

const initialState: SearchValueState = {
  value: '',
}

export const searchValueSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSearchValue: (state: SearchValueState, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { setSearchValue } = searchValueSlice.actions

export const selectSearchValue = (state: RootState) => state.searchValue.value

export default searchValueSlice.reducer
