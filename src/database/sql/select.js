const db = require('../connection/database')

async function getContacts(){
  const query = "select * from contact"
  try{
    await db.connect()
    const result = await db.query(query)
    await db.end()
    return result.rows
  }catch(err){
    await db.end()
    return undefined
  }
}

module.exports = { getContacts }

// getContacts()