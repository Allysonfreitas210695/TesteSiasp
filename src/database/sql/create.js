const db = require('../connection/database')

async function createContact(conxt){
  const query = "insert into contact(nome,celular,sobrenome,email) values($1, $2, $3 , $4)"
  try{
    await db.connect()
  await db.query(query, [conxt[0],conxt[1],conxt[2],conxt[3]])
  }catch(err){
    console.error(err.stack);
  }finally{
     await db.end()
  }
}

// if(createContact(["jose ","84 988138643", "teste 88123", "88teste@123.com"])){
//   console.log("Criado com Sucesso!");
// }else{
//   console.log("Erro ao criar contact!");
// }

module.exports = { createContact }