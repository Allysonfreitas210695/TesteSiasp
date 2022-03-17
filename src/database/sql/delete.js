const db = require('../connection/database')

async function deleteContact(id){
  const query = 'delete from contact where id=($1)'
  try{
    await db.connect()
    const result = await db.query(query,[id])
    await db.end();
    if(result.rowCount > 0) return result.rows
    else return undefined
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined;
  }
}

module.exports = { deleteContact }
// deleteContact(5)