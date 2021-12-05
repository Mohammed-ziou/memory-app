import express from "express";
const app = express();

import connection from "./startup/connection.js";
import DBConnection from "./startup/dB.js";
import allRoutes from "./startup/routes.js";

connection(app);
DBConnection();
allRoutes(app);
