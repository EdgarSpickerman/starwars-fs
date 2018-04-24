const config = require("../config").db_config;
const db = require("firebase").initializeApp(config).database()

module.exports = db;