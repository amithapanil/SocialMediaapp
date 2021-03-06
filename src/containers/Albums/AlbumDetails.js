import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useParams } from "react-router";

import { getAlbum } from "../../services/albums";
import { useDispatch } from "react-redux";

function AlbumDetails() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'SET_TITLE', data: 'Album Details'});
    getAlbum(id).then((res) => {
      setAlbum(res);
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
              {album ? (
                <>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {album.title}
                  </Typography>
                  <p>{album.title}</p>
                </>
              ) : ''}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AlbumDetails;
