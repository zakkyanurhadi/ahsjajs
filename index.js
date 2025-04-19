// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

// Init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// Function to start the server
const startServer = async () => {
  try {
    // Testing database connection
    await db.authenticate();
    console.log("Connection has been established successfully.");

    // use router
    app.use(Router);

    // listen on port
    app.listen(8000, () =>
      console.log("Server running at http://localhost:8000")
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Run the function
startServer();
