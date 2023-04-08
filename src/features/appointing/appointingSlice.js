import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherData from "./../../assets/teachersData.json";
import appointingData from "./../../assets/appointingData.json";
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  appointing: [],
};

export const postAppointingLog = createAsyncThunk(
  "appointing/postAppointingLog",
  async (data) => {
    try {
      const response = appointingData.push(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAppointingLog = createAsyncThunk(
  "appointing/getAppointingLog",
  async () => {
    try {
      return appointingData;
    } catch (error) {
      console.log(error);
    }
  }
);

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
        state.appointing = action.payload;
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
