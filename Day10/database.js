// Importing
// Using Node.js `require()`
const mongoose = require('mongoose');
const {Schema} = mongoose;

async function main() {
await   mongoose.connect("mongodb://Shreygoel:ShreyG0e1%4023@ac-sueqhml-shard-00-00.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-01.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-02.9tsduo1.mongodb.net:27017/Bookstore?authSource=admin&replicaSet=atlas-d3rvx5-shard-0&tls=true")

// code likhna shuru kar do 
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

// Document ko create kiya hai or Object ko create kiya hai
// insert data making object from User(class) using new
const user1 = new User({
  name:"Shrey",
  age:20,
  city:"Delhi",
  gender:"Male"
});

await user1.save() // ab ye info store hojaigi db me ajake 



// 2nd way of creating document:- ye document cretae bhi krdega or save bhi krdega isi step me
await User.create({name:"Rohit", city:"pakistan", age:30})


// agar muje bhut saare ek sath insert krne hai 
await User.insertMany([{name:"Ipsita"},{age:25, gender:"Male"}])


}

main()
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log(err))
