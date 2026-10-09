  const mongoose = require("mongoose");
  const dns = require("dns");

  dns.setServers(["8.8.8.8"]);

  const mongoURL =
    "mongodb+srv://princesseskaur2026_db_user:Dh4RGiEusHzBEptw@cluster0.bh4yj1h.mongodb.net/saloonproject";

  mongoose.connect(mongoURL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log("Error while connecting database:", error);
  });