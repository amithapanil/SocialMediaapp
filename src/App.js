import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import PostDetails from "./containers/Posts/PostDetails";
import Posts from "./containers/Posts/Posts";
import Header from "./components/Header/Header";
import { useAppContext } from "./core/Context";

const theme = createTheme();
function App() {
  const { isLogin } = useAppContext();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          {isLogin ? <Header /> : '' }
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
