import express from "express";
const router = express.Router();

const logs = [];

router.post("/ingest", (req, res) => {
  const logData = req.body;
  logs.push(logData);
  console.log("Log ingested:", logData);
  res.status(200).send("Log ingested successfully");
});

export default router;
