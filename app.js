// app.js

require("dotenv").config(); // Load environment variables from .env file

const mysql = require("mysql2");

// Create a connection to the database using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Perform database operations...

// Close the database connection when the application exits
process.on("SIGINT", () => {
  db.end((err) => {
    console.log("Database connection closed");
    process.exit(err ? 1 : 0);
  });
});

//npm install express
//for db --> npm install mysql2
// npm install dotenv
//node app.js -> for run
// npm install express body-parser -> for api
