import mongoose from "mongoose";

//create connection
const connectDB = async() => {
    try {
    mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
    console.log("connected to database successfully");
    } catch (err) {
        console.error('error connecting to database', err.massage);
    }
}
