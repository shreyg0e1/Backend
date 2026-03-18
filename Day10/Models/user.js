const  mongoose  = require("mongoose");
const {Schema} = mongoose;

// schema banao

const userSchema = new Schema({
  name:String,
  age:Number,
  city:String,
  gender:String
})

// Model ko create === Collection create karna (table ko create krna)=== Class create ki hai 
// mongoose.model("collection_name", uska_Schema);
const User = mongoose.model("user", userSchema);


module.exports = User ; 