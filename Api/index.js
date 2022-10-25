import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroutes from './routes/auth.js'
const app = express();
dotenv.config()
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoose")
      } catch (error) {
        throw(error);
      }
      
}

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
});

app.use(express.json())
app.use("/auth",authroutes)


app.listen(8800, () => {
    connect()
    console.log("connected!")
})