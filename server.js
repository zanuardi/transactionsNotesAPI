const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const getItems = require('./routes/items/getItems')
const addItems = require('./routes/items/addItems')
const getTransactions = require('./routes/transactions/getTransactions')
const addTransactions = require('./routes/transactions/addTransaction')

const app = express()
app.use(bodyParser.json())

app.use(registerRoute)
app.use(loginRoute)
app.use(rootRoute)

app.use(getTransactions)
app.use(addTransactions)
app.use(getItems)
app.use(addItems)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
