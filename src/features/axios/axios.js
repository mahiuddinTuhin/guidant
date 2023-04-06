import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "./../../assets/teachersData.json",
});

export default axiosInstance;
