const express = require("express"); //importanto o express
const app = express()
const sql = require('./database/importSqlComands') // modulos de comando sql
const PORT = 3000 //port padrao que escolhe 3000

app.use(express.json()) // vai ultiliza o padrao de json no envio

//1 - Deve ser possível salvar um novo contato na agenda;
app.post("/contacts", (req, res) => {
  const { nome, celular, sobrenome, email } = req.body
  const result = sql.create.createContact([nome, celular, sobrenome, email])
  
  res.json(result ? {"message": "Cadastrado com sucesso Contato na agenda!"} : {"message": "Error ao Criar Contato na agenda! (nome e celular nao pode está vazio)"})
})

// 2 - Deve ser possível visualizar um contato na agenda;
app.get('/contacts/:id', async (req, res) =>{
  const { id } = req.params
  const result = await sql.oneContact.getContact(id)
  //caso nao seja status 200 ele retorna um json de []
  res.json(result || [])
})

// 3 - Deve ser possível editar um contato na agenda;
app.patch('/contacts/:id', async (req, res) =>{
  const { id, nome, celular, sobrenome, email } = req.body
  const result = await sql.update.updateContact(id, [nome, celular, sobrenome, email])
  res.json(result ? { "message": "Contato Atualizado contato com sucesso!" } : {"message": "Error ao Atualizado contact!"})
})


// 4 - Deve ser possível excluir um contato da agenda;
app.delete('/contacts/:id', async (req, res) =>{
  const { id } = req.params
  const result = await sql.deleta.deleteContact(id)
  res.json(result ? { "message": "Contato deletado com sucesso!"} : {"message": "Erro ao deletado contato!"})
})


// 5 - Deve ser possível visualizar uma lista de contatos;
app.get('/contacts', async (req, res) =>{
  const result = await sql.select.getContacts()
  res.json(result || [])
})

//incializando na aplicação na porta 3000
app.listen(PORT, () => {
  console.log("tudo certo");
})