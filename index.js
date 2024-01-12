// index.js

// Import necessary modules
const express = require('express');

// Create an instance of the express application
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
