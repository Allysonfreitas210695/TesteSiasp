const db = require('../connection/database')

async function getContacts(){
  const query = "select * from contact"
  try{
    await db.connect()
    const result = await db.query(query)
    console.log(result.rows);
    return true
  }catch(err){
    console.log(err.stack);
    return false
  }finally{
    await db.end()
  }
}

module.exports = { getContacts }

// getContacts()