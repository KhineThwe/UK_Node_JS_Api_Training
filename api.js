// app.js

require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const database = require("./app");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// Your API routes and middleware go here...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route works!" });
});

app.post("/api/postExample", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res
      .status(400)
      .json({ error: "Message is required in the request body" });
  }

  // Process the received data
  const responseMessage = `Received message: ${message}`;

  // Send a response
  res.json({ success: true, message: responseMessage });
});
//https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
