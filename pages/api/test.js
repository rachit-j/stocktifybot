const express = require('express');
const cors = require('cors');

const app = express();

// Use the cors middleware
app.use(cors());

// Your routes
app.post('/api/generate', (req, res) => {
  // Your logic for the /api/generate route
  res.json({ message: 'Hello from generate!' });
});

// Handle all other routes (optional)
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Export the express app as a Vercel serverless function
module.exports = app;

const allowedOrigins = ['*'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
