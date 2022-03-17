const db = require('../connection/database')

async function updateContact(id, context){
  const query = 'UPDATE contact SET "nome" = $1, "celular" = $2, "sobrenome" = $3, "email" = $4 where "id" = $5';

  try{
    await db.connect()
    await db.query(query,[context[0], context[1],context[2],context[3], id])
    return true
  }catch(err){
    console.error(err.stack)
    return false
  }finally{
    await db.end()
  }
}


// if(updateContact(4, ["allyson bruno ff","84 998138643", "fernnades", "allyson@gmail.com"])){
//   console.log("Atualizado com sucesso!");
// }else{
//   console.log("Error ao Atualizar Contact");
// }

module.exports = { updateContact }