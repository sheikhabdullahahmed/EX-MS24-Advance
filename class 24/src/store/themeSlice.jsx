import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: "green",
}

export const themeSilce = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setcolor: (state) => {
      state.color = "red"
    },
  },
})

export const { setcolor} = themeSilce.actions

export default themeSilce.reducer