const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to display secrets and GitHub variable
app.get("/", (req, res) => {
    const secrets = {
        apiKey: process.env.SECRET_API_KEY,
        dbPassword: process.env.SECRET_DB_PASSWORD,
    };
    

    const customVariable = process.env.CUSTOM_VARIABLE || "Not defined";
    console.log(secrets.apiKey);
    if (secrets.apiKey === "api.macbease.com") {
        res.json({
            message: "Secrets retrieved successfully.",
            status: "Success",
            secrets,
            githubVariable: customVariable,
        });
    } else {
        res.status(401).json({
            message: "Unauthorized: Invalid SECRET_API_KEY",
            status: "Failure",
            githubVariable: customVariable,
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
