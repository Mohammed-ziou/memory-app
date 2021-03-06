import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();

import connection from "./startup/connection.js";
import allRoutes from "./startup/routes.js";

connection(app);
allRoutes(app);

app.get("/", (req, res) => {
  res.send("memories api is up and running :)");
});
