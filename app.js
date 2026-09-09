const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! Express Frontend is running successfully 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Express application is working!"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
});
