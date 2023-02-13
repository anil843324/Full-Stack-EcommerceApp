const app = require("./app");

const dotenv = require('dotenv');

const connectDatabase = require('./db/Database.js')


// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

// Config
dotenv.config({
    path: "backend/config/.env"
})

// connect database

connectDatabase();


// Create Server
const server = app.listen(4000, () => {
    console.log(`server is working on http://localhost:${4000}`)
})



// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() => {
        process.exit(1);
    });
});