import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5010",
});

export default axiosInstance;
