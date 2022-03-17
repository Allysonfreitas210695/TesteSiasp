const db = require('../connection/database')

async function updateContact(id, context){
  const query = 'UPDATE contact SET "nome" = $1, "celular" = $2, "sobrenome" = $3, "email" = $4 where "id" = $5';

  try{
    await db.connect()
    const result = await db.query(query,[context[0], context[1],context[2],context[3], id])
    await db.end()
    if(result.rowCount > 0) return result.rows
    else return undefined
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined
  }
}


module.exports = { updateContact }