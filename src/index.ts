import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, express!");
});

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
