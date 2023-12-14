import express from "express";
import { PORT, mongoDBURL } from './config.js'
import mongoose from "mongoose";
import  accountRoutes from './routes/accountRoutes.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

app.use('/accounts', accountRoutes);


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

