require("dotenv").config();
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const indexRounter = require('./routes/index');
const app = express();
 app.use(cors());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(express.json());
 app.use("/user", userRouter);
app.use("/", indexRounter)


mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log("DB is connected")
    app.listen(3000, ()=>{
    console.log("Server is Connected");
});
})
.catch(err=>{
    console.log("server error: "  );
});
