const mongoose=require('mongoose')
const express = require('express')
const db=require('./database/db')
const app = express()
const port = 3000

//middleware
app.use(express.json())

//middleware:linking the router files to make our route easy
app.use(require('./router/auth'))

//middleware
const middleware=(req,res,next)=>{//it takes 3 arguments,next means after 
  console.log(`hello middleware`) //the middleware's work is done,move to next
  next();
}

app.get('/', (req, res) => {
  res.send('Hello home!')
})

app.get('/about', middleware ,(req, res) => {//added middleware func here : user cannot directly 
  res.send('Hello about!')                  //go to about section without loggin in
})

app.get('/login', (req, res) => {
  res.send('Hello login!')
})

app.get('/signup', (req, res) => {
  res.send('Hello signup!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
we add middleware to make sure before viting any route and getting it's response,
we can do the work that we want to , like : the we can make sure that user must
login or signup,before accessing any other page.

-first middleware will complete it's work then next tasks will be carried over
-if we didnt call the next() of the middleware,the next tasks wont get executed
*/