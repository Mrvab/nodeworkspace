const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8081;

// app.listen(PORT, () => {
//   console.log(`Server Started on Port ${PORT}`);
// });

// //static way
// app.use(express.static(path.join(__dirname, "public")));


//basic routing way

// get request
app.get('/',  (req, res) =>{
    
    res.sendFile(path.join(__dirname,'public', 'index.html'));
    // res.send('Hello World 2021');
    console.log(`req is ${req}`);
})
app.get('/about',  (req, res) =>{
        res.sendFile(path.join(__dirname,'public', 'about.html'));
        console.log("hit about");
    })
// POST req
app.post('/',(req,res)=>{
    console.log('home post req');
    res.send('home post sucess!!');
})
app.post('/about', (req,res)=>{
    console.log('about post req');
    res.send('about post sucess!!');
})
// delete req
app.delete('/del',(req,res)=>{
    console.log('delete req');
    res.send('delete req success!!');
})

// ###################
app.get('/list_user', (req, res)=> {
    console.log("GET request for user list");
    res.send('User list');
 })

// page pattern
app.get('/ab*cd', (req, res)=> {   
    console.log('pattern page req');
    res.send('match found!!');
 })

// ##############

var server = app.listen(8081,  ()=> {
   var host = server.address().address
   var port = server.address().port

//    console.log("Example app listening at http://%s:%s", host, port)
   console.log(`server listning on ${port} <:> ${host}`);
})
