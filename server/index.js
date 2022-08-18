import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js' 
import reportRoure from './routes/report.js'
import test from './routes/test.js'

const app = express()
dotenv.config()


const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


app.use(cors())
app.use(express.json())

//Routes
app.use('/api/auth', authRoute)
app.use('/api/report', reportRoure)
app.use('/test', test)

async function start() {
    try {
        await mongoose.connect(
            `mongodb://${DB_USER}:${DB_PASSWORD}@185.241.193.26/${DB_NAME}`
        )
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()