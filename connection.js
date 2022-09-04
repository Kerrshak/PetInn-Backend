const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mDb = process.env.MONGODB_URI;

mongoose.connect(mDb, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));

module.exports = mongoose;
