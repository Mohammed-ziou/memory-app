import {
  LIKE_POST,
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../types/posts";

const posts = (posts = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    case CREATE_POST:
      return { ...posts, payload };
    case UPDATE_POST:
    case LIKE_POST:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case DELETE_POST:
      return posts.filter((post) => post._id !== payload);
    default:
      return posts;
  }
};
export default posts;
