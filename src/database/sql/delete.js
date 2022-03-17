const db = require('../connection/database')

async function deleteContact(id){
  const query = 'delete from contact where id=($1)'
  try{
    await db.connect()
    const result = await db.query(query,[id])
    return result.rowCount
  }catch(err){
    await db.release()
    return undefined;
  }
}

module.exports = { deleteContact }
// deleteContact(5)