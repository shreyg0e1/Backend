const express = require("express");
const app = express();


// =================Vo request bejta rhega response ni milra==========


/* app.use("/user", (req,res)=>{
   
 }) */

// ================or kuch time baad bnd krdega======

// Route Handler
// app.use(route, [RH,RH,RH,RH], RH, RH)
// Middleware : mw->mw->mw-> RequestHandler


// app.use("/user", (req,res,next)=>{
//     console.log("first");
//     // res.send("Hello ji");
//     next();
//     console.log("Sixth");
    
//     // console.log("First first");
//     // res.send("do response nahi bejskte socket hai ye naki web socket");
// })

// app.use("/user",(req,res,next)=>{
//      console.log("Second");
//     // res.send("Hello I am second");
//     next();
//     console.log("Fifth");
     
// })

// app.use("/user",(req,res,next)=>{
//      console.log("Third");
//     res.send("I am Third");
//     // next()
//     console.log("Fourth");
     
// })

// app.use("/user",(req,res,next)=>{
//      console.log("fourth");
//     res.send("I am Fourth");
    
// })

// Maintain logs through middleware
app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // Authorization wagera kar sakta hu
    next();
})


app.get("/user", (req,res)=>{
    res.send("Info about user")
})

app.post("/user", (req,res)=>{
    res.send("Info saved")
})

app.delete("/user", (req,res)=>{
    res.send("Info deleted")
})


app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})


// Request: Log ko maintain karta
// koi bhi request aati hai uska log maintain krna pdta hai
// Timing: kis type ki request thi, URL