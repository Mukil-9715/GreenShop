const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(

    {
        user:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
            
        },
        phone_number :{
            type:Number
            
        },
        password:{
            type:String,
            required:true
        }
    },
    {timestamp:true}
    )
    module.exports= mongoose.model("user", userSchema)