const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DB)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((error) => {
            console.log("DB Not Connected");
            console.error(error);
            process.exit(1);
        });
}

module.exports = dbConnect;
