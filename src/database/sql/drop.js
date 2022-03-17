const db = require('../connection/database')

async function dropTable(){
  const query = 'DROP TABLE contact CASCADE'
  try{
    await db.connect()
    const result = await db.query(query)
    await db.release()
    return result.rowCount;
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.release()
    return false;
  }
  
}

module.exports = { dropTable }
// dropTable()
