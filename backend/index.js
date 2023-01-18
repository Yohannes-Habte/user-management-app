import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoutes.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false})); // This hadles the data that come via the URL
app.use(bodyParser.json()); // This helps us to access data easily from the frontend to the backend
const PORT = process.env.PORT || 9000;

dotenv.config();

const connected = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO);
    console.log("DB is connected");
  } catch (error) {
    throw error;
  }
};

// Routes middleware
app.use("/users", userRoute);

// Error middleware - the errors that occur between req and res
app.use(globalErrorHandler);

app.listen(PORT, () => {
  connected();
  console.log(`Server running on port ${PORT}`);
});
