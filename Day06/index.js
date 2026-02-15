const express = require("express");

const app = express();



const BookStore = [
    {id:1, name:"Harry Potter", author:"J.K. Rowling"},
    {id:2, name:"Romeo and Juliet", author:"William Shakespeare"},
    {id:3, name:"The Diary of a Young Girl", author:"Anne Frank"},
    {id:4, name:"A Tale of Two Cities", author:"Charles Dickens"},
    {id:5, name:"The Intelligent Investor", author:"Benjamin Graham"},
]

app.use(express.json()) //parser

// localhost:3000/book/3

app.get("/book",(req,res)=>{
    res.send(BookStore);
})


// if i need any particular id book then ? 
app.get("/book/:id", (req,res)=>{
    const id= parseInt(req.params.id); //parsing because id ko string me bejra hai jbki number hai
    const Book = BookStore.find(info=> info.id===id); //BookStore me find kree hai book
    res.send(Book)
})


app.post("/book", (req,res)=>{
    BookStore.push(req.body);
    res.send("Data saved Sucessfully")
})

// // app.use("/user", (req,res)=>{
// //     res.send({"name":"Shrey"})
// // })




// //  parsing karni hoti hai
// app.use(express.json());
// // middleware: json format data=> JS Object


// app.get("/user", (req,res)=>{
//     res.send({"name":"Shrey"})
// })

// app.post("/user", (req,res)=>{
//     // console.log("Data saved sucessfully");
//     console.log(typeof req.body.age);
//     res.send("Data saved sucessfully")
// })

// //  get, post, patch, put, delete

app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})