import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json()); // parse JSON request body from the request body
app.use("/api/v1", authRouter); // use the authRouter to access the standard routes

const PORT = process.env.PORT || 5000;
app.listen(5000, () =>
  console.log("Server is running 🔥🔥🔥 http://localhost:" + PORT)
);
