import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

export const fetchAppointingLog = createAsyncThunk(
  "appointing/getAppointingLog",
  async () => {
    try {
      const response = await axiosInstance.get("/appointingData");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postAppointingLog = createAsyncThunk(
  "appointing/postAppointingLog",
  async (data) => {
    try {
      const response = axiosInstance.post("/postAppointing", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
