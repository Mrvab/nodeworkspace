const express = require("express");
const app = express();
const fs = require("fs");

var user = {
    user4: {
      name: "mohit",
      password: "password4",
      profession: "teacher",
      id: 4,
    },
  };


app.get("/api/listUsers", (req, res) => {
  fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
}); 


app.get("/api/:id", (req, res)=> {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    console.log("before...",users);
    var user = users["user" + req.params.id];
    console.log("after..",user);
    res.end(JSON.stringify(user));
  });
  var id = 2;

  app.delete("/api/deleteUser", (req, res)=>{
    fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
      data = JSON.parse(data);
      delete data["user" + 2];

      console.log(data);
      res.end(JSON.stringify(data));
    });
  });
});



app.post("/api/addUser", (req, res)=> {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8082, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server running at ${(port, host)}`);
});
