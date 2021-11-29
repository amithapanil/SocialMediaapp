import { SET_TITLE } from "../actions/generalAction";

const initialState = {
  appTitle: "Old Title",
};
const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        appTitle: action.data,
      };
    default:
      return state;
  }
};

export default generalReducer;
