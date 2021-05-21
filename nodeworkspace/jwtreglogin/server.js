const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql123pwd",
  database: "mytestdb",
});

con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/login/", (req, res) => {
  res.sendFile(__dirname + "/" + "login.html");
});

app.post("/jwtlogi/", (req, res) => {

  // var sql = `select name, pwd from jwtlog where name='${req.body.name}' and pwd = '${req.body.password}'`;
  let sql = `select login_user('${req.body.name}','${req.body.password}')`
  con.query(sql, (err, result) => {
    if (err) throw err;
    if (Object.keys(result).length === 0) {
      console.log("not registerd");
      res.send("invalid credintials or user not registerd");
    } else {
      var username = req.body.name;
      const token = jwt.sign({ username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
      });
      console.log("gentoken "+token);
      res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
      res.send("logged in");
      //   setTimeout(()=>{
      //       res.writeHead(301,{Location: '/renewt'});
      //   },300)
      res.end();
    }
    console.log(result);
  });
});

app.get("/renewtoken/", (req, res) => {
  var oldtoken = req.cookies.token;
  let verifytoken
  try{
    verifytoken = jwt.verify(oldtoken, jwtKey);
  }catch(e){
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end()
    }
  }
  
  console.log(verifytoken);
  const newtoken = jwt.sign({ usename: verifytoken.usename }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });
  res.cookie("token", newtoken, { maxAge: jwtExpirySeconds * 1000 });
  console.log("old token " + oldtoken);
  console.log("new token " + newtoken);
  res.send("newtoken : <br>"+newtoken+"<br> oldtoken  : <br>"+oldtoken);
  // res.writeHead(301, { Location: "/login" });
  res.end();
});

app.get("/register/", (req, res) => {
  res.sendFile(__dirname + "/" + "register.html");
});

app.post("/jwtregister", (req, res) => {
  var sql = `insert into jwtlog(name,pwd) values('${req.body.name}','${req.body.password}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send("success!!");
  });
});

app.get('/verifytoken/:token',(req,res)=>{
  var token = req.params.token;
  let verifytoken
  try{
    verifytoken = jwt.verify(token, jwtKey);
    
    var sql = 'select * from jwtlog';
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }catch(e){
    if (e instanceof jwt.JsonWebTokenError) {
      res.send("token expired! , login again")
      // return res.status(401).end() 
    }
  }
})

app.listen(PORT, () => {
  console.log("listning on port " + PORT);
});

// is_deleted, 0 exist 1 disable