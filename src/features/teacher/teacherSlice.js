import { createSlice } from "@reduxjs/toolkit";
import { fetchingTeacher } from "./teacherApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  teacher: {},
};

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
