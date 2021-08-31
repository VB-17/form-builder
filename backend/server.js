import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";

import connectDb from "./config/db.js";

dotenv.config();
connectDb();

const app = express();

// Default middleware to accept json comes above routes
app.use(express.json());
app.use(cors());

// Routes


// Route protection Middlewares



const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
