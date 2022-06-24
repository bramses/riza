// read a json file and return the data
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const readFile = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFile = async (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 6,
});
