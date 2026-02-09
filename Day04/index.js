// How to create a server
// module == http is there

const http = require('http');

const server = http.createServer((req, res)=>{
   
    // res.end("Hello Coder Army");

    if(req.url=="/"){
        res.end("Hello Coder Army");
    }

    else if(req.url==="/contact"){
        res.end("This is our Contact Page");
    }

    else if(req.url==="/about"){
        res.end("This is our About Page");
    }

    else {
        res.end("Error: Page Not Found");
    }



}); //server bngya, but host kese kru ? chahu toh bahar ya ander system me bhi krskta hu node js deta hai feature


// ab server bngya hai toh listen bhi krega
// me apne aap 4000 pe listen krva rha hu khi bhi krva skte hai
// ab jb ye listen krlega toh jo bhi ayega aap usko  response toh doge hi vo aap createser vali jga se doge
server.listen(4000, ()=>{
    console.log("I am Listening at port number 4000");
})

