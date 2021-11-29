import { applyMiddleware, combineReducers, createStore } from "redux";
import generalReducer from "../reducers/general";
import thunk from "redux-thunk";

const reducer = combineReducers({
  general: generalReducer,
});
const initialState = {
  general: { appTitle: "Old Title" },
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));
export default store;
