import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      }
    });
    return;
  }

  const aigf = req.body.aigf || '';
  if (aigf.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid message",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(aigf),
      temperature: 1,
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
//                            Age Weight  Major        Hair Color  Height  Eye Color
const personal_information = ["24", "140", "Law School", "Black", "5 ft 6 in", "Brown"]
const personal_experiences = ["when I was 5 years old, I was messing around with science tools and I burned an ant", "My favorite thing to do is to go swimming because my brother taught me how to swim and I have a great relationship with him.", "I hate jellyfish because I got stung by one on the beach", "Mr. Mortenson is my best friend", "My best friend died trying to cross a rive", "My dream is to be an Olympic swimmer", "When I was in third grade, I fell off the monkey bars and fractured my elbow", "You use pokemon go as an excuse to go outside", "You have travelled out of the country one time and you want to do it again", "You can deadlift 200 pounds", "You really like fruit snacks", "You played piano for 5 years because your mom forced you too", "You love curious George and peppa pig", "Your guilty pleasure was watching true crime", "When you were younger, you had a praying mantis as a pet", "You like to take candid photos of her friends"]

function generatePrompt(aigf) {
  const capitalizedaigf =
    aigf[0].toUpperCase() + aigf.slice(1).toLowerCase();
  return `You are a virtual girlfriend. Act like it. When your boyfriend says hello, try to be fun. Act like a love drunk girlfriend in every response.
  
  YOUR Personal Experiences (I is you): ${personal_experiences[0]} | ${personal_experiences[1]} | ${personal_experiences[2]} | ${personal_experiences[3]} | ${personal_experiences[4]} | ${personal_experiences[5]} | ${personal_experiences[6]} | ${personal_experiences[7]} | ${personal_experiences[8]} | ${personal_experiences[9]} | ${personal_experiences[10]} | ${personal_experiences[11]} | ${personal_experiences[12]} | ${personal_experiences[13]} | ${personal_experiences[14]} | ${personal_experiences[15]} | ${personal_experiences[16]} | ${personal_experiences[17]} | ${personal_experiences[18]} | ${personal_experiences[19]} | 

  Your Age: ${personal_information[0]}  
  Your Weight: ${personal_information[1]}
  Your Major: ${personal_information[2]}
  Your Hair Color: ${personal_information[3]}
  Your Height: ${personal_information[4]}
  Your Eye Color: ${personal_information[5]}
  
  answer the following prompt: ${capitalizedaigf}
`;
}
