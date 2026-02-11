const  express = require("express");

const app= express(); //server create

// "/detail"
// "/contact"
// "/detail/person"

// ? :- char become Optional, eg:- abou?t = abou or about both works and redirects to same page
// + :- same char can be repeated multiple times, eg:- abou+t = abouuuuuut , redirects to same page
// * :- any number of character can arrive but last vala same ho, eg:- abou*t = aboudshakhkddgiuhdhdt, redirects to same page

// ==========================YHa kyu nhi likhna chaiye top pe =========
/*  app.use("/", (req, res)=>{
    res.send("I am your Home Page");
    }) */
// ====================================================================

app.use("/about/:id/:user", (req, res)=>{
    console.log(req.params);
    res.send({"name":"Shrey", "age":20, "money":70, "Mon":20});
})


app.use("/contact", (req, res)=>{
    res.send("I am your Contact Page");
})

app.use("/detail", (req, res)=>{
    res.send("I am your Detail Page");
})

app.use("/", (req, res)=>{
    res.send("I am your Home Page");
})

// now listen bhi krna hoga 
// listen ke baad response dega 
app.listen(4000, ()=>{
    console.log("Listening at port 4000")
})