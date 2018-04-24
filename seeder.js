require("dotenv").config();
const db = require("./lib/database").db;
const seed = require("./lib/database").seed;

db.ref().set(seed);