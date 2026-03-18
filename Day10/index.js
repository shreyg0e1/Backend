const express = require ("express");
const app = express();
const main = require("./database");
const User = require("./Models/user")


app.use(express.json());


// CRUD: Create Read Update Delete

// show all data
app.get("/info", async (req,res)=>{
   const ans = await User.find({})
    res.status(200).send(ans)
})

// post (iserting a info)
app.post("/info", async (req,res)=>{

    try{
    await User.create(req.body)
   res.send("Inserted Sucessfully")
    }
    catch(err){
        res.status(500).send(err)
    }
})

// delete
app.delete("/info", async (req,res)=>{
    await User.deleteOne({name:"Shrey"})
    res.send("Deleted Sucessfully")
})

// update
app.put("/info", async (req,res)=>{
    const result = await User.updateOne({name:"Anil"},{age:20, city: "Dubai"}) 
    res.send("Updated Sucessfully") 
})

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000")
    })

   
})

.catch((err)=>console.log(err))


