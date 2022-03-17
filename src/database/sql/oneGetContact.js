const db = require('../connection/database')

async function getContact(id){
  const query = "select * from contact where id=$1"
  try{
    await db.connect()
    const result = await db.query(query, [id])
    await db.release()
    return result.rows
  }catch(err){
    await db.release()
    return undefined
  }
}

module.exports = { getContact }