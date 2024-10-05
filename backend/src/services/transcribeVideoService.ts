import dotenv from "dotenv";

import { TokenTextSplitter } from "@langchain/textsplitters";
import { SearchApiLoader } from "@langchain/community/document_loaders/web/searchapi";

dotenv.config();

const api_Key = process.env.SEARCHAPI_APIKEY as string;

export const transcribeVideo = async (url: string) => {
  const loader = new SearchApiLoader({
    apiKey: api_Key,
    engine: "youtube_transcripts",
    video_id: url,
    lang: "ar",
  });

  const youtubeText = await loader.load();

  // TO BE USED LATER !!

  // const textSplitter = new TokenTextSplitter({
  //   chunkSize: 800,
  //   chunkOverlap: 100,
  // });

  // const splitDocs = await textSplitter.splitDocuments(youtubeText);

  return youtubeText;
};
