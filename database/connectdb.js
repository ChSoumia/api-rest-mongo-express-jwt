import "dotenv/config";
import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGODB);
  console.log("Connected to MongoDB! 👌");
} catch (error) {
  console.log("Error connecting to MongoDB 😵 :" + error.message);
}
