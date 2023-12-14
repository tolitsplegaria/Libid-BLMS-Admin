import express from "express";
import { PORT, mongoDBURL } from './config.js'
import mongoose from "mongoose";
import { Accounts } from "./models/accountModel.js"


const app = express();

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log(`listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })