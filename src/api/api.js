import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});
export const GET = () => axiosInstance.get("/");

export const CREATE = (task) => axiosInstance.post("/", task);

export const DELETE = (id) => axiosInstance.delete("/");
