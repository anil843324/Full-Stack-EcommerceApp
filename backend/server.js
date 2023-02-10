const app = require("./app");

const dotenv = require('dotenv');

const connectDatabase = require('./db/Database.js')

// Config
dotenv.config({
    path: "backend/config/.env"
})

// connect database

connectDatabase();


// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
