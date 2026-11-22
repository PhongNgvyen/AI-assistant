import express from "express";
import cors from "cors";

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "JARVIS backend is running",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`JARVIS backend running on port ${PORT}`);
});