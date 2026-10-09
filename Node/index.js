const express = require("express");

const app = express();
require('dotenv').config()
const db = require("./server/config/db");

// Middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes after middleware
const api = require("./server/route/ApiRoutes");

app.use("/api", api);

const PORT = 5000;

app.listen(PORT, () => {
console.log("Server is running on port", PORT);
});