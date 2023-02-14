const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connectDataBase = () => {

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then((data) => {
        console.log(`Mongodb is connect with server : ${data.connection.host}`)
    }).catch((err) => {
        console.log(`failed to connect database`)
    })
};


module.exports = connectDataBase