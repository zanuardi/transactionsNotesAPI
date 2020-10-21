const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const addBooks = require('./routes/books/addBooks')
const getBooks = require('./routes/books/getBooks')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const userTransactions = require('./routes/usertransactions/getUserTransaction')
const transactions = require('./routes/transactions/getTransactions')

const app = express()
app.use(bodyParser.json())

app.use(registerRoute)
app.use(loginRoute)
app.use(rootRoute)
app.use(userTransactions)
app.use(transactions)

app.use(addBooks)
app.use(getBooks)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
