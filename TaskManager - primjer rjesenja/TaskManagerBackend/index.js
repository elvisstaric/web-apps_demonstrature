import express from "express";
import cors from "cors";
import taskRouter from "./routes/example.js";
const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("TaskManagerBackend");
});

app.listen(PORT, () => {
  console.log(`Poslužitelj sluša na portu ${PORT}`);
});
