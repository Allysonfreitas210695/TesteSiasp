const db = require('../connection/database')

async function deleteContact(id){
  const query = 'delete from contact where id=($1)'
  try{
    await db.connect()
    await db.query(query,[id])
    return true
  }catch(err){
    console.error(err.stack);
    return false;
  }finally{
    await db.end()
  }
}

module.exports = { deleteContact }
// deleteContact(5)