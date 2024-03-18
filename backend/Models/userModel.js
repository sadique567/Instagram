const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    email:{
            type:String,
            required:true
    },
   password: {
        type:String,
        required:true
    }
}
,{
timestamps:{
    createdAt : "created_at",
    updatedAt: "updated_at"
}

});
module.exports = mongoose.model("user", userModel);