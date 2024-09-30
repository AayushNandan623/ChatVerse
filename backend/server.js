dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToMongoDB.js";

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is listing on port http://localhost:${PORT}/api/v1/`);
});
