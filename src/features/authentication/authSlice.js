import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getLoggedUserData, signupWithEmail } from "./authApi";

const initialState = {
  isLoading: true,
  isError: false,
  error: "",
  loggedInUser: {},
};

export const createNewUser = createAsyncThunk(
  "authSlice/createNewUser",
  async (data) => {
    try {
      const response = signupWithEmail(data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loggedInUser = createAsyncThunk(
  "authSlice/loggedInUser",
  async (data) => {
    try {
      const response = getLoggedUserData();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.loggedInUser = null;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
