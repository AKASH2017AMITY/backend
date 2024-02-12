// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()


















// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"
// const app = express()


// ;(function connectDB(){


// })()

// ;( asyn ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("err",(err)=>{
//             console.log("ERR: ",err);
//             throw err;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on Port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("Error", error)
//         throw error
//     }
// })()