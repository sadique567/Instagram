const express = require("express")
const router = express.Router()
const userdb = require('../Models/userModel');

router.post("/register",async (req , res) => {

  console.log(req.body)
  
  let email = req.body.email;
  let password = req.body.password;
  let userObject = new userdb ({
    email : email, 
    password : password

  })
  let result = await userObject.save();
  console.log(result);
  res.send("It's Done");

});
router.get("/login",(req , res) => {
res.send("user Login");
});


module.exports = router;