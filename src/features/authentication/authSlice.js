import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherData from "./../../assets/teachersData.json";
import { getLoggedUserData, signupWithEmail } from "./authApi";

const initialState = {
  isLoading: false,
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
  name: "teachers",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
