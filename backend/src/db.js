const { Pool } = require("pg");
const db = new Pool({
    user:"postgres",
    password:"byjus",
    host:"localhost",
    port:"5432",
    database:"student"
})

module.exports = db;