import axios from "../core/Axios";
export const getPosts = () => axios.get("/posts").then((res) => res.data);
export const getPost = (id) =>
  axios.get("/posts/" + id).then((res) => res.data);
