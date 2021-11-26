import React, { memo } from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import Header from "../Header/Header";

function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Outlet />
    </Box>
  );
}

export default memo(DashboardLayout);
