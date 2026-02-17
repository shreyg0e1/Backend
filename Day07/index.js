const express = require("express");

const app = express();



const BookStore = [
    {id:1, name:"Harry Potter", author:"J.K. Rowling"},
    {id:2, name:"Romeo and Juliet", author:"William Shakespeare"},
    {id:3, name:"The Diary of a Young Girl", author:"Anne Frank"},
    {id:4, name:"A Tale of Two Cities", author:"Charles Dickens"},
    {id:5, name:"The Intelligent Investor", author:"Benjamin Graham"},
    {id:6, name:"Heloo", author:"Benjamin Graham"}
]

app.use(express.json()) //parser

// localhost:3000/book/3

app.get("/book",(req,res)=>{
    // console.log(req.query);
    const Book = BookStore.filter(info=> info.author===req.query.author);
    res.send(Book);
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
 

app.patch("/book", (req,res)=>{
    console.log(req.body)

    const Book = BookStore.find(info=> info.id=== req.body.id);
    
    if(req.body.author)
    Book.author=req.body.author;

    if(req.body.name)
    Book.name=req.body.name;



    res.send("Patch updated")
})




app.put("/book", (req,res)=>{

    const Book = BookStore.find(info=> info.id=== req.body.id);
    Book.author=req.body.author;
    Book.name=req.body.name;

    res.send("Put changes updated sucessfully")


})


app.delete("/book/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info=> info.id=== id);
    BookStore.splice(index,1);
    res.send("SUCESSFULLY DELETED")
})










app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})