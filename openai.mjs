import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  

const createEmbeddings = async (input) => {
  // todo: create embeddings
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 6,
  });
    console.log(response.data);
    return response.data;
}
export {
    createEmbeddings,
}