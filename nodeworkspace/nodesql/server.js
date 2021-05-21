var mysql      = require('mysql');

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mysql123pwd',
    database : 'mytestdb'
});
var msg = "connected";

// CRUD operation on User table in db *time stamp # 1
// jwt token # 2


// create data

// con.connect((err)=>{
//     if(err) throw err;
//     console.log(msg);
//     var sql = "insert into user (first_name, last_name) values ('this', 'too delete') ";
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log("number of affected rows "+ result.affectedRows);
//     })
// })

// read the data

con.connect((err)=>{
    if(err) throw err;
    console.log(msg);
    var sql = "select * from user ";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
})

// update data

// con.connect((err)=>{
//     if(err) throw err;
//     console.log(msg);
//     var sql = "update user set first_name = 'zilong' where id = 1";
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result.message+ " updated rows " + result.affectedRows);
//     })
// })

// delete
// con.connect((err)=>{
//     if(err) throw err;
//     console.log(msg);
//     var sql = "delete from user where last_name = 'delete'";
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result.message+ " deleted rows " + result.affectedRows);
//     })
// })


// user table creation
// con.connect((err)=>{
//     if(err) throw err;
//     console.log(msg);
//     var sql = "create table user(id int auto_increment primary key, first_name varchar(255), last_name varchar(255) , create_time datetime default current_timestamp )";
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log("table created");
        
//     })
// })








// sql def work

// con.connect((err) =>{
//     if (err) throw err;
//     console.log("connected");
//     var sql = "create database mytestdb";
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log("db created");
//     });
// });


//table creation
// con.connect((err)=>{
//     if(err) throw err;
//     var sql = 'create table person (name varchar(255), age int, id int auto_increment primary key)';
//     con.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log("table created");
//         console.log(result);
//     })
// })

// altering table "add col, alter col, drop col"
// con.connect((err)=>{
//     if(err) throw err;
//     console.log(msg);
//     var sql = "alter table jwtlog add is_deleted int "
//     con.q
// })



