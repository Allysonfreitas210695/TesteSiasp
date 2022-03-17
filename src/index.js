const express = require("express"); //importanto o express
const app = express()
const sql = require('./database/importSqlComands') // modulos de comando sql

const PORT = 3000 //port padrao que escolhe 3000

app.use(express.json()) // vai ultiliza o padrao de json no envio

// deixa como uma rota padrao retornando a lista de contatod
app.get('/', async (req, res) =>{
  const result = await sql.select.getContacts()
  //retornando o status de acordo com requisicao do cliente
  try{
    if(typeof result == "undefined"){
    res.status(406).json({"Error": "Erro ao busca todos os Contato! "})
  }else {
    res.status(200).json(result)
  }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
  
})

app.post("/contacts", (req, res) => {
  const { nome, celular, sobrenome, email } = req.body
  const result = sql.create.createContact([nome, celular, sobrenome, email])
  //retornando o status de acordo com requisicao do cliente
  try{
    if(typeof result == "undefined"){
    res.status(406).json({"Error": "Erro ao cadastra Contato!"})
  }else {
    res.status(200).json({"Success": "Contato Criado com Sucesso!"})
  }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
})

// 2 - Deve ser possível visualizar um contato na agenda;
app.get('/contacts/:id', async (req, res) =>{
  const { id } = req.params
  const result = await sql.oneContact.getContact(id)
  //retornando o status de acordo com requisicao do cliente
  try{
    if(typeof result == "undefined"){
    res.status(404).json({"Error": "Erro ao buscar Contato!"})
  }else {
    res.status(200).json(result)
  }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
  
})

// 3 - Deve ser possível editar um contato na agenda;
app.patch('/contacts/:id', async (req, res) =>{
  const { id, nome, celular, sobrenome, email } = req.body
  const result = await sql.update.updateContact(id, [nome, celular, sobrenome, email])
//retornando o status de acordo com requisicao do cliente
try{
  if(typeof result == "undefined"){
    res.status(406).json({"Error": "Erro ao atualizado Contato!"})
  }else {
    res.status(200).json({"Success": "Contato atualizado com Sucesso!"})
  }
}catch{
  res.status(500).json({"Error": "Error no servido"})
}
  
})


// 4 - Deve ser possível excluir um contato da agenda;
app.delete('/contacts/:id', async (req, res) =>{
  const { id } = req.params
  const result = await sql.deleta.deleteContact(id)
//retornando o status de acordo com requisicao do cliente
  try{
    if(typeof result == "undefined"){
    res.status(406).json({"Error": "Erro ao deleta Contato!( parametros errado) "})
  }else {
    res.status(200).json({"Success": "Contato deleta com Sucesso!"})
  }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
  
})


// 5 - Deve ser possível visualizar uma lista de contatos;
app.get('/contacts', async (req, res) =>{
  const result = await sql.select.getContacts()
  //retornando o status de acordo com requisicao do cliente
  try{
     if(typeof result == "undefined"){
    res.status(406).json({"Error": "Erro ao busca todos os Contato! "})
  }else {
    res.status(200).json(result)
  }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
 
})

// 6 - Deve ser possível buscar um contato por nome ou número;
// ex: http://localhost:3000/contact?nome=Allyson&celular=998138643, tanto pode passa os dois como só um deles!
app.get('/contact', async (req, res) => {
  const { nome, celular } = req.query  // aqui receber os parametros do tipo String com(?) e se for mais de um (&)
  
  const result = await sql.retornaOptions.getNomeAndNumero(nome, celular)
  // retornando o status de acordo com requisicao do cliente
  try{
    if(typeof result == "undefined"){
      res.status(406).json({"Error": "Erro ao busca um Contato! "})
    }else {
      res.status(200).json(result)
    }
  }catch{
    res.status(500).json({"Error": "Error no servido"})
  }
  
})


//incializando na aplicação na porta 3000
app.listen(PORT, () => {
  console.log("tudo certo");
})