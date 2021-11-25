import axios from "../core/Axios";
export const getPosts = () => axios.get("/posts").then((res) => res.data);
