import { createStore } from "redux";
import generalReducer from "../reducers/general";

const store = createStore(generalReducer);
export default store;