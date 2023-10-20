import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  // Set up CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!configuration.apiKey) {
    return res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      }
    });
  }

  const aigf = req.body.aigf || '';
  if (aigf.trim().length === 0) {
    return res.status(400).json({
      error: {
        message: "Please enter a valid message",
      }
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(aigf),
      temperature: 1,
      max_tokens: 500,
    });
    return res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(aigf) {
  const capitalizedaigf = aigf[0].toUpperCase() + aigf.slice(1).toLowerCase();
  return `answer the following prompt: ${capitalizedaigf}`; // truncated for brevity
}
