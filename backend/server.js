import express from "express";
import dotenv from "dotenv";
const app = express();

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
app.use("/api/v1/auth", authRoutes);
app.get("/api/v1/", (req, res) => {
  res.json({ msg: "Hello World!!" });
});

app.listen(PORT, () => {
  console.log(`Server is listing on port http://localhost:${PORT}/api/v1/`);
});