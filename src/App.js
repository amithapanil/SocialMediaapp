import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import PostDetails from "./containers/Posts/PostDetails";
import TodosDetails from "./containers/Todos/TodosDetails";
import Posts from "./containers/Posts/Posts";
import Todos from "./containers/Todos/Todos";
import { useAppContext } from "./core/Context";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

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
              <Route path="/todos" index element={<Todos />} />

              <Route index element={<Posts />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/todos/:id" element={<TodosDetails />} />
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
