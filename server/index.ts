import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
require("dotenv").config();

const app = express()

app.use(json())

mongoose.connect(process.env.MONGO_URL || '')
        .then(() => {
            console.log('connected')
        })
        .catch((error) => {
            console.log(error)
        })

app.listen(3000, () => {
    console.log('listening')
})