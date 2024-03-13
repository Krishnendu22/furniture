const express=require('express')
const cors=require('cors')
const app=express()
const {connectToDb}=require('./DB/dbConfig')
const dotenv=require('dotenv')
dotenv.config()
connectToDb()

app.use(express.json())
app.use(cors())





app.listen(4000)