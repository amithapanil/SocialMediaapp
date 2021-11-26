import axios from "../core/Axios";
export const getPhotos = () => axios.get("/photos").then((res) => res.data);