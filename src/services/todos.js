import axios from "../core/Axios";
export const getTodos = () => axios.get("/todos").then((res) => res.data);
export const getTodo = (id) =>
  axios.get("/todos/" + id).then((res) => res.data);