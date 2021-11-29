import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Skeleton, Typography } from "@mui/material";
import { getPosts } from "../../services/posts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions/generalAction";

const variants = ["h3", "h5", "h5", "h5", "h5", "h5"];

function Posts() {
  const [posts, setPosts] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Post"));
    getPosts().then((res) => {
      setPosts(res);
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
              {posts ? (
                <>
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    marginBottom={2}
                  >
                    Post
                  </Typography>
                  {posts.map((item) => (
                    <Typography
                      component="h6"
                      variant="h6"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                      key={item.id}
                    >
                      <Link to={"/post/" + item.id}> {item.title}</Link>
                    </Typography>
                  ))}
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

export default Posts;
