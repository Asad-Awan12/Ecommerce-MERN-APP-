import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
    addUser:(state,action)=>{
      return [...state,{...action.payload}]
    },
    loginUsers: (state,action) => {
      state = action.payload;
    },
    logoutUser: (state) => {
      state = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUsers, logoutUser,addUser } = userSlice.actions

export default userSlice.reducer