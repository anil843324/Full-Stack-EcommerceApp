const express = require('express');
const app = express();
const ErrorHandler = require('./middleware/error')
const cookeParser = require('cookie-parser')

app.use(express.json());
app.use(cookeParser());

// Route import
const product = require('./routes/ProductRoute')
const user = require('./routes/UserRoute')
const order = require('./routes/OrderRoute')
app.use('/api/v2', product)
app.use('/api/v2', user)
app.use('/api/v2', order)


// It's fro errorHandling
app.use(ErrorHandler);




module.exports = app;