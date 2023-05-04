import axios from "axios";

const response = await axios.get("http://localhost:8000/tasks/api/v1/tasks/");

console.log(response);
