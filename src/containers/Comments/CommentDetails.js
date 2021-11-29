import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { getComment } from "../../services/comments";
import { useDispatch } from "react-redux";

function CommentDetails() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_TITLE", data: "Comment Details" });
    getComment(id).then((res) => {
      setComment(res);
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
              {comment ? (
                <>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {comment.name}
                  </Typography>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="green"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {comment.email}
                  </Typography>
                  <p>{comment.body}</p>
                </>
              ) : (
                ""
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CommentDetails;
