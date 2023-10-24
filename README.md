# StocktifyBot

StocktifyBot is a backend service designed to power the interactions for the [Stocktify website](https://theoh32.github.io/Stocktify/). It's deployed on Vercel and integrates with OpenAI to provide relevant responses based on user queries.

![Stocktify Logo](https://github.com/rachit-j/stocktifybot/raw/main/public/stocktify_logo.png)

## Features

- **OpenAI Integration**: Uses OpenAI to generate dynamic responses based on user input.
- **CORS Support**: Ensures that the backend can be accessed from different origins, making it flexible for frontend integrations.
- **Direct Interaction**: Provides an interface to directly communicate with the bot for testing and demonstration purposes.



## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!

## API Endpoints

- **Generate Response**: [`/api/generate`](https://github.com/rachit-j/stocktifybot/blob/main/pages/api/generate.js) - Accepts a `stockbot` parameter in the request body and returns a generated response.
- **Test Endpoint**: [`/api/test`](https://github.com/rachit-j/stocktifybot/blob/main/pages/api/test.js) - A test endpoint to check the server's functionality.

## Deployment
StocktifyBot is deployed on Vercel to hide the OpenAI Environment Variable for the key and to keep the light npm server standalone. To deploy this on your own, simply fork the repository and deploy it on Vercel, and make sure to add your OpenAI key as OPENAI_API_KEY, and fill in the value with your key provided from OpenAI

## Contribution

This backend was created by Rachit Jaiswal (@rachit-j), and  is a contribution to the Stocktify app, a collaboration between Theo Huntlas, Rachit Jaiswal, Grace Wang, and Kaiden Do. 
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of the [MIT License](https://github.com/rachit-j/stocktifybot/blob/main/LICENSE).

