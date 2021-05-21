const express = require("express");
const app = express();
const fs = require('fs');
const upload = require('express-fileupload');
// const multer  = require('multer');
// deprecated
// const bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// use this

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload());

// app.use(multer({ dest: '/tmp/'}));


const PORT = process.env.PORT || 8081;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});


// get req Implementation
app.get("/process_get", (req, res) => {
  // Prepare output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

// Post request implementation
app.post("/process_post", (req, res) => {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});


// Uploading file and saving in tmp
app.post('/file_upload', (req, res)=> {
    if(req.files){
        var file = req.files.file;
        var filename = req.files.file.name;
        file.mv('./tmp/'+filename,(err)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send('upload success');
            }
        })
    }

})

var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`listning on port ${(host, port)}`);
});

