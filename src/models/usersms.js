const mongoose = require('mongoose');

const userSms=  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    phone:{
        type:Number,
        index:true,
        required:true,
        unique:true
    
    },
    message:{
        type:String,
        required:true
    }
});

const userMessage =  mongoose.model("Enquery",userSms);

 module.exports =userMessage;