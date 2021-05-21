const mysql = require('mysql');
const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mysql123pwd',
    database : 'mytestdb'
});

module.exports = con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
});

// module.export = (sql)=>{
//     con.query(sql,(err,result)=>{
//         if (err) throw err;
//         return result;
//     });
// };