const express= require('express');
const router = express.Router();

router.get("/user/index",(req, res) => {
res.send("My index Routes")
})
module.exports = router;


