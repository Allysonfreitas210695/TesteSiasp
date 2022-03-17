const db = require('../connection/database')

async function getNomeAndNumero(nome, celular){
  

  await db.connect()
  try{
    var result;
    if(nome){
      var query = "select * from contact where nome=$1"
      result = await db.query(query, [nome])
    }else if(celular){
      var query = "select * from contact where celular=$1"
      result = await db.query(query, [celular])
    }else{
      var query = "select * from contact where nome=$1 and celular=$2"
      result = await db.query(query, [nome, celular])
    }
    await db.end()
    if(result.rowCount > 0) return result.rows
    else return undefined
  }catch(err){
    console.error("error na connection"+err.stack);
    await db.end()
    return undefined
  }
}
 
module.exports = { getNomeAndNumero }