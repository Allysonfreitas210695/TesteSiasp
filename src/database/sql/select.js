const db = require('../connection/database')

async function getContacts(){
  const query = "select * from contact"
  try{
    await db.connect()
    const result = await db.query(query)
    await db.end()
    if(result.rowCount > 0) return result.rows
    else return undefined
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined
  }
}

module.exports = { getContacts }

// getContacts()