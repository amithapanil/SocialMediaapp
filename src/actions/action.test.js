import { setTitle, SET_TITLE } from "./generalAction";

test("setTitle will return action", () => {
  expect(setTitle("Post")).toEqual({ type: SET_TITLE, data: "Post" });
});
