const mongoose = require('mongoose');
const Mongodb_URI = process.env.Mongodb_URI;


function connectDB() {
    mongoose.connect(Mongodb_URI)
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    });

}
module.exports = connectDB;