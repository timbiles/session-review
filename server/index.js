require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 3001

const app = express()
app.use(bodyParser.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialize: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
}))

//endpoints
let n = 'Tim'
app.put('/api/session', (req, res) => {
    const {name} = req.body
    
    if (name === n) {
      req.session.username = name;
      res.status(200).send(req.session);
    } else {
      res.status(500).send('error')
    }
  });


app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})
