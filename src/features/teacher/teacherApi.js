import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

export const fetchingTeacher = createAsyncThunk(
  "teacher/fetchingTeacher",
  async (teacherid) => {
    try {
      const response = await axiosInstance.get(
        `/singleTeacher?id=${teacherid}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
