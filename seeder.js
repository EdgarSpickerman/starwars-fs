require("dotenv").config();
const config = require("./lib/config").db_config;
const db = require("firebase").initializeApp(config).database()
const seed = require("./lib/database").seed;

db.ref().set(seed);