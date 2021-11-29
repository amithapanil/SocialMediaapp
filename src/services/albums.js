import axios from "../core/Axios";
export const getAlbums = () => axios.get("/albums").then((res) => res.data);
export const getAlbum = (id) =>
  axios.get("/albums/" + id).then((res) => res.data);
