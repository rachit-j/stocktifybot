import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import cors from 'cors';

class OpenAIApp {
  constructor(apiKey) {
    this.app = express();
    this.app.use(cors());
    this.configuration = new Configuration({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
    this.setupRoutes();
  }

  setupRoutes() {
    this.app.use((req, res, next) => {
      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allow POST and OPTIONS methods
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
      next();
    });

    this.app.post('/', this.handleRequest.bind(this));
  }

  async handleRequest(req, res) {
    // Handle pre-flight request. Don't run the rest of the method body if this is a pre-flight request.
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    if (!this.configuration.apiKey) {
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
      const completion = await this.openai.createCompletion({
        model: "text-davinci-003",
        prompt: this.generatePrompt(stockbot),
        temperature: 0.6,
        max_tokens: 500,
      });
      res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
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

  generatePrompt(stockbot) {
    const capitalizedstockbot =
      stockbot[0].toUpperCase() + stockbot.slice(1).toLowerCase();
    return `You are a bot that goes by the name "stockbot" and you are trying to help the user with basic questions in any way you can, respectfully and with dignity.

Prompt: ${capitalizedstockbot}`;
  }

  listen(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  }
}

// Usage
const app = new OpenAIApp();
app.listen();
