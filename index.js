const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to display secrets
app.get("/", (req, res) => {
    const secrets = {
        apiKey: process.env.SECRET_API_KEY,
        dbPassword: process.env.SECRET_DB_PASSWORD,
    };

    
    res.json({
        message: "Secrets retrieved successfully.",
        secrets,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
