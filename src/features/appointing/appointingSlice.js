import { createSlice } from "@reduxjs/toolkit";

import { fetchAppointingLog, postAppointingLog } from "./appointingApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  appointing: [],
};

export const appointingSlice = createSlice({
  name: "appointingLog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAppointingLog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(postAppointingLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointing = action.meta.arg;
      })
      .addCase(postAppointingLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchAppointingLog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchAppointingLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointing = action.payload;
      })
      .addCase(fetchAppointingLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default appointingSlice.reducer;
