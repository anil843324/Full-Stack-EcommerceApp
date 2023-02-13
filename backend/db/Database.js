const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connectDataBase = () => {

    mongoose.connect("mongodb+srv://anilreact:anilreact@cluster0.euclhnk.mongodb.net/e-commerce-app?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then((data) => {
        console.log(`Mongodb is connect with server : ${data.connection.host}`)
    }).catch((err) => {
        console.log(`failed to connect database`)
    })
};


module.exports = connectDataBase