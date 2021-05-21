const express = require("express");
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors alllow

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//db connection setup
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Mysql123pwd',
    database : 'mytestdb'
});

const PORT = process.env.PORT|| 3000;

// init connection

con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
});



//edituserpage

app.get('/api/edituser',(req,res)=>{
    res.sendFile(__dirname+"/"+"edituser.html");
});



//delete user

app.delete('/api/deleteuser/:id',(req,res)=>{
    var sql = 'delete from user where id = ?'
    var value = req.params.id;
    con.query(sql,[value],(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});


// create user page

app.get('/api/createuser',(req,res)=>{
    res.sendFile(__dirname+"/"+"adduser.html");
});

// start page

app.get('/', (req,res)=>{
    res.json('rest api with db implementation');
    
});


// read data

app.get('/api/getalluser',(req,res)=>{
    var sql = "select * from user";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});

// filter data
app.get('/api/:id',(req,res)=>{
    var sql = "select * from user where id =?";
    var value = req.params.id;
    con.query(sql,[value],(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});




// add user db
app.post('/api/adduser',(req,res)=>{
    var sql = 'insert into user(first_name,last_name) values(?)';
    var values = [req.body.first_name,req.body.last_name];
    con.query(sql,[values],(err,result)=>{
        if(err) throw err;
        con.query(`select * from user where id = ${result.insertId}`,(err,result)=>{
            res.json(result);
        });
        
    });
});

//update user
app.post('/api/updateuser',(req,res)=>{
    var sql = `update user set first_name ='${req.body.name}'  where id = '${req.body.id}'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});


const server = app.listen(PORT,()=>{
    console.log(`listning on ${PORT}`);
})