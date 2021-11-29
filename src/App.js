import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import { useAppContext } from "./core/Context";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

const Posts = React.lazy(() => import("./containers/Posts/Posts"));
const PostDetails = React.lazy(() => import("./containers/Posts/PostDetails"));
const Users = React.lazy(() => import("./containers/users/Users"));
const Userdetails = React.lazy(() => import("./containers/users/Userdetails"));
const Albums = React.lazy(() => import("./containers/Albums/Albums"));
const AlbumDetails = React.lazy(() =>
  import("./containers/Albums/AlbumDetails")
);
const Comments = React.lazy(() => import("./containers/Comments/Comments"));
const CommentDetails = React.lazy(() =>
  import("./containers/Comments/CommentDetails")
);
const Todos = React.lazy(() => import("./containers/Todos/Todos"));
const TodosDetails = React.lazy(() =>
  import("./containers/Todos/TodosDetails")
);
const Photos = React.lazy(() => import("./containers/Photos/Photos"));

const theme = createTheme();
function App() {
  const { isLogin } = useAppContext();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route
              path="/"
              element={isLogin ? <DashboardLayout /> : <Navigate to="/login" />}
            >
              <Route index element={<Posts />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/todos/:id" element={<TodosDetails />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user/:id" element={<Userdetails />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/album" element={<Albums />} />
              <Route path="/album/:id" element={<AlbumDetails />} />
              <Route path="/comment" element={<Comments />} />
              <Route path="/comments/:id" element={<CommentDetails />} />
              <Route />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
