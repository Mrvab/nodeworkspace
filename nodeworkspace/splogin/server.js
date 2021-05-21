const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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

  let sql = `select login_user('${req.body.name}','${req.body.password}')`
  con.query(sql, (err, result) => {
    if (err) throw err;
    let obj = JSON.stringify(result[0])
    if(`${obj.split(":")[1]}`.split('}')[0]==='0'){
        res.send("invalid credintials or user not registerd");
    }
    else{
        res.send("logged in");
    }
    
  });
});

app.listen(PORT,()=>{
    console.log(`listning on ${PORT}`)
})