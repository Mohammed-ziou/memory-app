// import usersRoute from "../routes/users.js";
import express from "express";

export default function allRoutes(app) {
  app.use(express.json());
  //app.use("/api/users", usersRoute);
}
