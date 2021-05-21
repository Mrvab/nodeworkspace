const mysql = require('mysql')
const con = mysql.createConnection({
    host:"localhost",
    name:"root",
    password:"Mysql123pwd",
    database:"mytestdb"
})

const runquery = (sql)=>{
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}

module.exports={
    runquery
}