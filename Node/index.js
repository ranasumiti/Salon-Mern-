const express = require("express");

const app = express();
require('dotenv').config()
const db = require("./server/config/db");
const seed = require("./server/config/seed")

// Middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes after middleware
const api = require("./server/route/ApiRoutes");
app.use("/api", api);

const admin = require("./server/route/AdminRoutes")
app.use("/admin",admin)
seed()

const student = require('./server/route/StudentRoutes')
app.use("/student",student)

const beautician = require('./server/route/BeauticianRoutes')
app.use("/beautician", beautician)

const PORT = 5000;

app.listen(PORT, () => {
console.log("Server is running on port", PORT);
});