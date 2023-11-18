import express, { json } from "express";
import cors from "cors";
import router from "./routes/flow.js";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Update this to your React app's URL
    credentials: true, // This is important for cookies and session handling
  })
);

app.use(json());

const logs = [];

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Log Ingestor listening at http://localhost:${port}`);
});
