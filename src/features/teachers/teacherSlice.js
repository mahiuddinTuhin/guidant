import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherData from "./../../assets/teachersData.json";
import axios from "axios";
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  teachers: [],
};

export const fetchingTeachers = createAsyncThunk(
  "teachers/fetchingTeachers",
  async () => {
    try {
      //   const response = await axios.get(teacherData);
      return teacherData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingTeachers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchingTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchingTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default teacherSlice.reducer;
