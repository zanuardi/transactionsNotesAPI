const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authorization = require('../../middleware/authorizationMiddleware')

app.use(authorization)
app.get('/transactions', (req, res) => {

  const result = db.get('transactions', req.query)
  res.send(result)
})


module.exports = app