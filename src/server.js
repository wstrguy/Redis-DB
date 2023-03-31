import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
import { router as personRouter } from "./routes/person.routes.js";

app.get("/", (req, res) => {
  res.send("Welcome to Redis DB");
});

app.use("/api", personRouter);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
