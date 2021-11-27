import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { getUser } from "../../services/users";
import { useDispatch } from "react-redux";

const variants = ["h2", "h3", "body1", "body1", "body1", "body1"];

function Userdetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_TITLE", data: "User Details" });
    getUser(id).then((res) => {
      setUser(res);
    });
  }, []);
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 5, display: "flex", flexDirection: "column" }}>
              {user ? (
                <>
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    marginBottom={2}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                    variant="h6"
                    component="h3"
                  >
                    Username: {user.username}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                    variant="h6"
                    component="h3"
                  >
                    Email: {user.email}
                  </Typography>
                  <Typography mb={1} variant="h6" component="h3">
                    Address: {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </Typography>
                  <Typography mb={1} variant="h6" component="h3">
                    Phone: {user.phone}
                  </Typography>
                  <Typography mb={1} variant="h6" component="h3">
                    Website: {user.website}
                  </Typography>
                  <Typography mb={1} variant="h6" component="h3">
                    Company: {user.company.name}, {user.company.catchPhrase},{" "}
                    {user.company.bs}
                  </Typography>
                </>
              ) : (
                <div>
                  {variants.map((variant, index) => (
                    <Typography component="div" key={index} variant={variant}>
                      <Skeleton />
                    </Typography>
                  ))}
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Userdetails;
