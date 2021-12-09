import postsRoute from "../routes/posts.js";
import userRoute from "../routes/users.js";
import bodyParser from "body-parser";
import cors from "cors";

export default function allRoutes(app) {
  // app.use(express.json({ limit: "50mb" }));
  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  app.use("/posts", postsRoute);
  app.use("/user", userRoute);
}
