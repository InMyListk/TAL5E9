import { Router } from "express";
import { videoSummaryController } from "../controllers/videoSummaryController";

const videoRouter = Router();

videoRouter.post("/youtube/url", videoSummaryController);

export default videoRouter;
