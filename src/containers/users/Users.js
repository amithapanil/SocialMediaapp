import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { getUsers } from "../../services/users";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


 function Users() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({type:'SET_TITLE', data: 'User'});
      getUsers().then((res) => {
        setUsers(res);
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
                  
                  {users.map((item) => (
                    <Typography
                      component="h6"
                      variant="h6"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                      key={item.id}
                    >
                      <Link to={"/user/" + item.id}> {item.name}</Link>
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
    }
    
    export default Users;