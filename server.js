const express = require("express")
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')


//Defining Port Number ...
const PORT = process.env.PORT || 2000

//registering APP
const app = express()

//requesting home page
app.get("/", (req,res)=>{
    res.render('home')
})


//registering templating Enginee...and setting up views ,...
app.use(expressLayouts)
app.set('views', path.join(__dirname,"/resources/views"))
app.set('view engine', 'ejs' )



//Running Server and serve http requests...
app.listen(PORT, ()=>{
    console.log("server Has been started.... on Port,",PORT)
})