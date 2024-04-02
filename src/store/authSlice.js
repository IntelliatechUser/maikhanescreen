import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  testdata: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {  // Use 'reducers' instead of 'reducer'
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    testingdata: (state, action) => {
     
      state.testdata = action.payload;
    },
  },
});

export const { login, logout, testingdata } = authSlice.actions;
export default authSlice.reducer;
