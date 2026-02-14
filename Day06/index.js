const express = require("express");

const app = express();

// app.use("/user", (req,res)=>{
//     res.send({"name":"Shrey"})
// })


app.get("/user", (req,res)=>{
    res.send({"name":"Shrey"})
})

app.post("/user", (req,res)=>{
    console.log("Data saved sucessfully");
    res.send("Data saved sucessfully")
})

//  get, post, patch, put, delete

app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})