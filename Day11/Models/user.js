const  mongoose  = require("mongoose");
const {Schema} = mongoose;

// schema banao

const userSchema = new Schema({
     firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength:20
     },

     lastName:{
      type:String
     },

     age:{
      type:Number,
      min: 14,
      max:70,
      required: true
     },

     gender:{
      type:String,
     //  enum:["male", "female", "others"]
     validate(value){
          if(!["male", "female", "others"].includes(value))
               throw new Error("Invalid Gender");
     }

     },

     emailId:{
      type:String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      immutable: true
     },

     password:{
      type:String
     },

     photo:{
      type:String,
      default:"Yha koi link hoga vse, me abhi string dera hu vse link hota hai jese anomynous pic hoti hai "
     }

}, {timestamps:true} )

// Model ko create === Collection create karna (table ko create krna)=== Class create ki hai 
// mongoose.model("collection_name", uska_Schema);
const User = mongoose.model("user", userSchema);


module.exports = User ; 