//importing Controller
const homeController = require("../app/http/controllers/homeController")
const authController = require("../app/http/controllers/authController")
const customerController = require("../app/http/controllers/customerController/customerController")

const initRoute =(app)=>{
//requesting home page
app.get("/",homeController().homepage)

//login 
app.get("/login", authController().login)
//register
app.get("/register", authController().register)


//addtocart and Update-cart
app.post("/update-cart", customerController().updateCart)
//orderSummaryPage;;
app.get("/cart", customerController().cart)}
module.exports = initRoute