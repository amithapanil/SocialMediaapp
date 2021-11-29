import axios from "../core/Axios";
export const getPhotos = () =>
  axios.get("/photos").then((res) => res.data.slice(0, 10));
