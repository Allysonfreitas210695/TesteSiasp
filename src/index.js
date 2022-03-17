const express = require("express");
const PORT = 3000
const sql = require('./database/importSqlComands')
const app = express()


app.get("/contacts", (req, res) => {
  BD.connect.selectContacts()
  res.send({name: "allyson"})
})

app.listen(PORT, () => {
  console.log("tudo certo");
})