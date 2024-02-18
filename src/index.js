// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {

        app.on("err", (err) => {
            console.log("Err", err)
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Mongo db connection failed !!!", err)
    })


















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