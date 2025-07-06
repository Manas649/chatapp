import axios from "axios";

// Determine the base URL dynamically based on environment
const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // local dev backend
    : import.meta.env.VITE_API_URL; // production backend from .env

// Create a configured axios instance
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // enable cookies if using authentication
});
