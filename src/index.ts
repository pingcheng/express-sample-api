import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, express!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
