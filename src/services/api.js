import axios from "axios";

const api = axios.create({
  baseURL: "https://marcia-api.herokuapp.com",
});

export default api;
