const posts = (posts = [], { type, payload }) => {
  switch (type) {
    case "FETCH_ALL":
      return payload;
    case "CREATE_POST":
      return { ...posts, payload };
    default:
      return posts;
  }
};
export default posts;
