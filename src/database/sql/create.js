const db = require('../connection/database')

async function createContact(context){
  const query = "insert into contact(nome,celular,sobrenome,email) values($1, $2, $3 , $4)"
  try{
    await db.connect()
    const result = await db.query(query, [context[0],context[1],context[2],context[3]])
    if(result.rowCount >= 0){
      await db.end()
      return result.rowCount
    }
  }catch(err){
    await db.end()
    return undefined
  }
}


module.exports = { createContact }