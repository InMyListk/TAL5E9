import dotenv from "dotenv";

import { TokenTextSplitter } from "@langchain/textsplitters";
import { SearchApiLoader } from "@langchain/community/document_loaders/web/searchapi";

dotenv.config();

const api_Key = process.env.SEARCHAPI_APIKEY as string;
const loader = new SearchApiLoader({
  apiKey: api_Key,
  engine: "youtube_transcripts",
  video_id: "2icg6a5NKBs",
  lang: "ar",
});

export const youtubeText = await loader.load();

const textSplitter = new TokenTextSplitter({
  chunkSize: 800,
  chunkOverlap: 100,
});

const splitDocs = await textSplitter.splitDocuments(youtubeText);
