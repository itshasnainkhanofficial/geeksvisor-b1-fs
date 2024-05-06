// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
// Define a GET route
app.get('/', (req, res) => {
  res.send({"myname":'Hello, this is a simple GET API!'});
});

// Define another route with a parameter
app.get('/', (req, res) => {
  res.send("Helo");
});

app.get('/abc', (req, res) => {
    res.status(500).send({ error: 'Internal server error' });
  });

// Start the server

app.listen(4500, () => {
  console.log(`Server is running on port 4500`);
});
