import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/action/posts";
import { Container, Grow, Grid } from "@material-ui/core";

import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import useStyles from "./style";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { mainContainer } = useStyles();
  return (
    <>
      <Grow in>
        <Container>
          <Grid
            container
            className={mainContainer}
            justifyContent="space-between"
            alignContent="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
