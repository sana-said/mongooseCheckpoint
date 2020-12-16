const express=require('express')
const app= express()
const mongoose=require('mongoose')
const connectDB=require('./config/connectDB')

//connect Database
connectDB()

//middleware
app.use(express.json())
// routes
app.use('/api' , require('./routes/person'))

//run server
const port = process.env.PORT || 5000
app.listen(port,err=> err? console.log(err) : console.log(`Server is running on port ${port}`))
    

