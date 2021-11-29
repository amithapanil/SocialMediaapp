import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { getPost } from "../../services/posts";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions/generalAction";

const variants = ["h2", "body1"];

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Post Details"));
    getPost(id).then((res) => {
      setPost(res);
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
              {post ? (
                <>
                  <Typography
                    component="h4"
                    variant="h4"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {post.title}
                  </Typography>
                  <p>{post.body}</p>
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

export default PostDetails;
