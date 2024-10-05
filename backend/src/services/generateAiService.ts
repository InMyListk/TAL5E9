import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { transcribeVideo } from "./transcribeVideoService";

const api_Key = process.env.GEMINI_APIKEY as string;

export const summarizeText = async (url: string) => {
  const response = await transcribeVideo(url);
  const text = response[0].pageContent;
  console.log(text);
  const schema = {
    description:
      "List of sections where each section contains a topic and associated information",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        information: {
          type: SchemaType.STRING,
          description: "Detailed information about the topic",
          nullable: false,
        },
        topic: {
          type: SchemaType.STRING,
          description: "The topic of the section",
          nullable: false,
        },
      },
      required: ["information", "topic"],
    },
  };

  const genAI = new GoogleGenerativeAI(api_Key);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const prompt = `Could u write a very detailed in arabic about this video script ${text} .`;

  const result = await model.generateContent(prompt);

  const sunnaryVideo = JSON.parse(result.response.text());
  return sunnaryVideo;
};
