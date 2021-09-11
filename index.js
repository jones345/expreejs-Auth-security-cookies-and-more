const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport			= require('passport');
require('./auth')

const app = express()
app.use(session({secret:'cats'}));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3002


function isLoggedIn(req, res,next){
  req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res,next) => {
  res.send('<a href="/auth/google">Aunthenticate with Google</a>')
})

app.get('/auth/google',passport.authenticate('google',{scope:['email','profile']}))

app.get('/google/callback',
passport.authenticate('google',
{
  successRedirect:'/protected',
failureRedirect:'/auth/failure'
}
)
 );
 app.get('/auth/failure/',(req, res)=>{
   app.send('something went wrong')
 })

app.get('/protected', isLoggedIn, (req, res)=>{
res.send(` hello  ${req.user.displayName}`)
console.log(req.user)
} );

app.get('/logout',(req,res)=>{
  req.logout();
  req.session.destroy();
  res.send('Goodbye')
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 