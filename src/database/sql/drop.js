const db = require('../connection/database')

async function dropTable(){
  const query = 'DROP TABLE contact CASCADE'
  try{
    await db.connect()
    await db.query(query)
    console.log("tabela removida com sucesso");
    return true;
  }catch(err){
    console.error(err.stack);
    return false;
  }finally{
    await db.end()
  }
  
}

module.exports = { dropTable }
// dropTable()
