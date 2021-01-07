const express = require("express")
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')


//Defining Port Number ...
const PORT = process.env.PORT || 2000

//registering APP
const app = express()

app.use(express.static("public"))




//registering templating Enginee...and setting up views ,...
app.use(expressLayouts)
app.set('views', path.join(__dirname,"/resources/views"))
app.set('view engine', 'ejs' )

//requesting home page
app.get("/", (req,res)=>{
    res.render('home')
})

//orderSummaryPage;;
app.get("/cart", (req,res)=>{
    res.render("customers/cart")
})

app.get("/login", (req,res)=>{
    res.render("auth/login")
})
app.get("/register", (req,res)=>{
    res.render("auth/register")
})

//Running Server and serve http requests...
app.listen(PORT, ()=>{
    console.log("server Has been started.... on Port,",PORT)
})