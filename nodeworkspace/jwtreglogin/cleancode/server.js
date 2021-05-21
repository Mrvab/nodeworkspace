const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const {runquery} = require('./db')

app.use(express.urlencoded({ extended: false }));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/"+"login.html")
    res.end()
})

app.post('/login/',(req,res)=>{
    const sql = `select name, pwd from jwtlog where name='${req.body.name}' and pwd = '${req.body.password}'`
    runquery(sql)
    res.end()
})

app.listen(PORT,()=>{
    console.log('on port...'+PORT)
})
