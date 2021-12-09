import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/action/posts";

import useStyles from "./style";
import {
  ThumbUpAlt,
  Delete,
  MoreHoriz,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const { media, card, overlay, overlay2, cardActions, details } = useStyles();

  const Likes = () => {
    if (post.likeCount.lenght > 0) {
      return post.likeCount.find(
        (like) => like === user?.result?.googleId || user?.result?._id
      ) ? (
        <ThumbUpAlt fontSize="small">
          &nbsp;
          {post.likeCount.lenght > 2
            ? `You and ${post.likeCount.lenght - 1} others`
            : `${post.likeCount.lenght} like${
                post.likeCount.lenght > 1 ? "s" : ""
              }`}
        </ThumbUpAlt>
      ) : (
        <ThumbUpAltOutlined fontSize="small">
          &nbsp;{post.likeCount.lenght}
          {post.likeCount.lenght === 1 ? "Like" : "Likes"}
        </ThumbUpAltOutlined>
      );
    }
    return <ThumbUpAltOutlined fontSize="small">&nbsp;Like</ThumbUpAltOutlined>;
  };

  return (
    <Card className={card}>
      <CardMedia
        component="img"
        image={post.selectedFile}
        className={media}
        title={post.title}
      />
      <div className={overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </div>
      <div className={details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
