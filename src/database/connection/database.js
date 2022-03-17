const Client = require('pg').Client

const cliente = new Client({
  user: "postgres",
  password: "210695",
  database: "agenda",
  port: 5432,
  host: "127.0.0.1"
})

module.exports = cliente