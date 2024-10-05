import { Request, Response, NextFunction } from "express";
import { summarizeText } from "../services/generateAiService";

export const videoSummaryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = req.body.url;
  console.log(url);
  try {
    const text = await summarizeText(url);
    res.send({ text: text });
    next();
  } catch (error) {
    throw new Error(`videoSummaryController error: ${error}`);
  }
};
