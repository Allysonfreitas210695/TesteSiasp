const db = require('../connection/database')

async function getContact(id){
  const query = "select * from contact where id=$1"
  await db.connect()
  try{
    const result = await db.query(query, [id])
    await db.end()
    if(result.rowCount > 0) return result.rows
    else return undefined
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined
  }
}
 
module.exports = { getContact }