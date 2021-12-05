import { useSelector } from "react-redux";

import Post from "./Post/Post";
// import useStyles from "./style";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  // const { mainContainer, smMargin, actionDiv } = useStyles();
  console.log(posts);
  return (
    <>
      POSTS
      <Post />
      <Post />
    </>
  );
};

export default Posts;
