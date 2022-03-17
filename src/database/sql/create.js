const db = require('../connection/database')

async function createContact(context){
  const query = "insert into contact(nome,celular,sobrenome,email) values($1, $2, $3 , $4)"
  try{
    await db.connect()
    const result = await db.query(query, [context[0],context[1],context[2],context[3]])
    await db.end()
    if(result.rowCount > 0)
      return result.rowCount
    else 
      throw new Error("erro na conection com pg")
  
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined
  }
}


module.exports = { createContact }