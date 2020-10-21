const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')
const hyperid = require('hyperid')


app.post('/login', (req, res) => {

  const result = db.get('users', req.body)
  if (!result) {
    res.status(401).send('Unauthorized')

  } else {
    const instance = hyperid()
    result.token = instance()
    res.send(result)
  }
  return
})


module.exports = app