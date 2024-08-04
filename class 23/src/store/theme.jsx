// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   product : "banana",
// }

// export const theme = createSlice({
//   name : "theme",
//   initialState,
//   reducers: {
//     setProduct: (state) => {
//       state.product = "Apply"
//     },
//   },
// })

// export const { setProduct } = theme.actions

// export default theme.reducerimport { createSlice } from '@reduxjs/toolkit'


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   card: 1,
// }

// export const theme = createSlice({
//   name: 'Cards',
//   initialState,
//   reducers: {
//     setCard: (state) => {
//       state.card = 2
//     },
//   },
// })

// export const { setCard} = theme.actions

// export default theme.reducer





import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  values: 1,
}

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setValue: (state) => {
      state.values = 2 
    },
  },
})


export const { setValue } = theme.actions

export default theme.reducer