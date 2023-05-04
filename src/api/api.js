import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});
export const get = () => axiosInstance.get("/");

export const create = (task) => axiosInstance.post("/", task);
