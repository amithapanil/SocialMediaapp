import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import PostDetails from "./containers/Posts/PostDetails";
import Posts from "./containers/Posts/Posts";

import { useAppContext } from "./core/Context";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Comments from "./containers/Comments/Comments";
import CommentDetails from "./containers/Comments/CommentDetails";

const theme = createTheme();
function App() {
  const { isLogin } = useAppContext();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <DashboardLayout /> : <Navigate to="/login" />}
          >
            <Route index element={<Posts />} />
            <Route path="/post/:id" element={<PostDetails />} />
           
            <Route path="/comment" element={<Comments />} />
            <Route path="/comments/:id" element={<CommentDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
