import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import PostDetails from "./containers/Posts/PostDetails";
import Posts from "./containers/Posts/Posts";
import { useAppContext } from "./core/Context";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Users from "./containers/users/Users";
import Userdetails from "./containers/users/Userdetails";

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
            <Route  path="/post"  element={<Posts />} />
            <Route path="/post/:id" element={<PostDetails />} />
        
            <Route  path="/Users"  element={<Users />} />
            <Route path="/user/:id" element={<Userdetails />} />
            </Route>
          <Route path="/login" element={<Login />} />
              
          
        </Routes>
        
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
