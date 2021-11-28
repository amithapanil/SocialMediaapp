import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import { useAppContext } from "./core/Context";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
const Posts = React.lazy(() => import("./containers/Posts/Posts"));
const Todos = React.lazy(() => import("./containers/Todos/Todos"));
const PostDetails = React.lazy(() => import("./containers/Posts/PostDetails"));
const TodosDetails = React.lazy(() =>
  import("./containers/Todos/TodosDetails")
);

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
