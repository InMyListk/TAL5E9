import express from "express";
import cors from "cors";

import videoRouter from "./routes/videoSummaryRoute";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", videoRouter);

app.listen(4000, () => {
  console.log("server running");
});
