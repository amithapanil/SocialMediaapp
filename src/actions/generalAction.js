export const SET_TITLE = "SET_TITLE";

export const setTitle = (title) => {
  return { type: SET_TITLE, data: title };
};

// Async
// export const setTitle = (title) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({ type: SET_TITLE, data: title });
//     }, 3000);
//   };
// };
