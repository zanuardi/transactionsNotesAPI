const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const addBooks = require('./routes/books/addBooks')
const getBooks = require('./routes/books/getBooks')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const getAccounts = require('./routes/accounts/getAccounts')
const addAccounts = require('./routes/accounts/addAccounts')
const getTransactions = require('./routes/transactions/getTransactions')
const addTransactions = require('./routes/transactions/addTransaction')

const app = express()
app.use(bodyParser.json())

app.use(registerRoute)
app.use(loginRoute)
app.use(rootRoute)

app.use(getTransactions)
app.use(addTransactions)

app.use(getAccounts)
app.use(addAccounts)
app.use(addBooks)
app.use(getBooks)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
