// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   color : []
// }

// export const theme = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     setTheme: (state, data) => {
//       state.color.push(data.payload)
//     },
//   },
// })

// export const { setTheme } = theme.actions

// export default theme.reducer



// App.jsx// countSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  theme: 'light', 
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, setTheme, reset } = countSlice.actions;

export default countSlice.reducer;




