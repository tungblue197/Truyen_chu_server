const { pool } = require("../../database/db");

class Menu {
static getMenu = async () => {
    const connection = await pool.connect();
    if(connection){
        let result =  await pool.query('select * from menu');
        return { data: result.rows, total: result.rowCount , code: 200};
    }
    connection.end(); 
  }
}
module.exports = Menu;
