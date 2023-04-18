import { createSlice } from "@reduxjs/toolkit";

import { fetchingTeachersData } from "./teachersApi";
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  teachers: [],
};

// export const getTeachersData = createAsyncThunk(
//   "teachers/getTeachersData",
//   async () => {
//     try {
//       const response = await fetchingTeachersData();
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingTeachersData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchingTeachersData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchingTeachersData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default teacherSlice.reducer;
