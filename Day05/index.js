const  express = require("express");

const app= express(); //server create

app.use((req, res)=>{
    res.send("Hello Coder Army");
})
// now listen bhi krna hoga 
// listen ke baad response dega 
app.listen(4000, ()=>{
    console.log("Listening at port 4000")
})