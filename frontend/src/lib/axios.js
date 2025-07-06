import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // Local dev backend
    : import.meta.env.VITE_API_URL; // From Vercel environment

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // For cookies (if auth uses them)
});
