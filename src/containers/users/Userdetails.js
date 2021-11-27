import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { getUser } from "../../services/users";
import { useDispatch } from "react-redux";
import "./Tabl.css";

function Userdetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'SET_TITLE', data: 'User Details'});
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
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {user ? (
                <>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    <h2>{user.name}</h2>
                  </Typography>
                  <table>
                    <tr>
                    <th>Id</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANY</th>
                    </tr>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.address.street}<br></br>
                      {user.address.suite}<br></br>
                      {user.address.city}<br></br>
                      {user.address.zipcode}<br></br>
                     Geo:<br></br>
                      lat:{user.address.geo.lat}<br></br>
                      lng:{user.address.geo.lng}<br></br>
                      </td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td><h4>{user.company.name}</h4><br></br>
                      {user.company.catchPhrase}<br></br>
                      {user.company.bs}<br></br>
                      </td>

                    </tr>
                    </table>
                  
                  
                </>
              ) : ''}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Userdetails;
