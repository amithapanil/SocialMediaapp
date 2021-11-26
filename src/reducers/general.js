const initialState = {
  appTitle: "Old Title",
};
const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        appTitle: action.data,
      };
    default:
      return state;
  }
};

export default generalReducer;
