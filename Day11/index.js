const express = require ("express");
const app = express();
const main = require("./database");
const User = require("./Models/user")

app.use(express.json());

// register a user in databse
app.post("/register",async (req,res)=>{
    try{

        // Validate  kya uske ander firstName (api level validation)
        // req.body ke ander data aya hai, usme (firstName , emailId, age) present hona chaiye
        const mandatoryField = ["firstName" , "emailId", "age"]
        const IsAllowed = mandatoryField.every((k)=> Object.keys(req.body).includes(k))
        if(!IsAllowed)
            throw new Error("Fields Missing")
        await User.create(req.body);
        res.send("User Registered Sucessfully")
    }
    catch(err){
        res.send("Error"+ err.message)
    }
})

// Get all data
app.get("/info", async(req,res)=>{
   try{
   const result= await User.find({})
    res.send(result)
   }
   catch(err){
    res.send("Error" + err.message)
   }
})


// Unique user 

app.get("/user/:id", async(req,res)=>{
    try{
    const unique= await User.findById(req.params.id)
    res.send(unique)
   }
   catch(err){
    res.send("Error"+ err.message)
} 
})

// Delete
app.delete("/user/:id",async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.send("Deleted Sucessfully")
    }
    catch(err){
        res.send("Error"+ err.message)
    }
})

/*
  {
    "_id":"69bd5b8f4c07ec6547275d4e",
    "lastName":"Goel",
    "age":25
  }
 */

// Update (3 arguments: id, update, options)
app.patch("/user", async(req,res)=>{
    try{
        const {_id, ...update}=req.body
        await User.findByIdAndUpdate(_id, update,{"runValidators":true })
        res.send("Sucessfully Updated")
    }
    catch(err){
        res.send("Error"+ err.message)
    }
})


main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000")
    })

   
})

.catch((err)=>console.log(err))


