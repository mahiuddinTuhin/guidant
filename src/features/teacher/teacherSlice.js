import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherData from "./../../assets/teachersData.json";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  teacher: {},
};

export const fetchingTeacher = createAsyncThunk(
  "teacher/fetchingTeacher",
  async (teacherid) => {
    try {
      const response = teacherData.find((t) => t.id === teacherid);
      return response;
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
      .addCase(fetchingTeacher.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchingTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teacher = action.payload;
      })
      .addCase(fetchingTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default teacherSlice.reducer;
