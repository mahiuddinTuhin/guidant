import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

export const fetchingTeachersData = createAsyncThunk(
  "teachers/fetchingTeachers",
  async () => {
    try {
      const response = await axiosInstance.get("/teachersData");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
