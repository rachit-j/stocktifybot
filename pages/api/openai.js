import { Configuration, OpenAIApi, CreateCompletionRequest } from "@openai/client";

const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  key: process.env.OPENAI_API_KEY
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { prompt, maxTokens } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completionRequest = new CreateCompletionRequest({
      model: "davinci-003",
      prompt: prompt,
      max_tokens: maxTokens || 150
    });

    const response = await openai.createCompletion(completionRequest);
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: 'Error interacting with OpenAI' });
  }
}

// Allow any CORS
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
