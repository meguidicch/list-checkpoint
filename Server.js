const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const contactRouter = require('./Routes/Contact')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/Contact',contactRouter)


app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))
