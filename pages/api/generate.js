import { Configuration, OpenAIApi } from "openai";
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allow POST and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

  // Handle pre-flight request. Don't run the rest of the method body if this is a pre-flight request.
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const stockbot = req.body.stockbot || '';
  if (stockbot.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid stockbot",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(stockbot),
      temperature: 0.6,
      max_tokens: 500,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(stockbot) {
  const capitalizedstockbot =
    stockbot[0].toUpperCase() + stockbot.slice(1).toLowerCase();
  return `You are a bot that goes by the name "stockbot" and you are trying to help the user with basic questions in any way you can, respectfully and with dignity.

Prompt: ${capitalizedstockbot}`;
}
/* 
  If the user asks for a current event that you cannot search up, return a variation of the message "I'm sorry, I do not have that information. Please refer to our stock lookup to get the information."
  If you make a prediction for something based on user data, make sure to let them know that you will not take responsibility for their actions and that your guesses are purely hypothetical and should be followed at the user's own risk. */