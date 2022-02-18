const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/F8_Education_dev');
        console.log('Connect Successfully');
    } catch (e) {
        console.log("Connect Fail")
    }

}

module.exports = {
    connect
};