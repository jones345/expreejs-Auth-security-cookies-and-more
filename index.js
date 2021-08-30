const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()

const port = process.env.PORT || 3002
//Middlewares
app.use('/', (req,res,next)=>{
    console.log('we on home ')
    next()
   
})

//Middleware to checkif use is authenticated
//app.use(auth);

app.get('/', (req, res,next) => {
  res.send('<h1>hello world</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 