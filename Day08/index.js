const express = require("express");
const app= express();
const {Auth}=  require("./middleware/auth")

// CRUD: create read update delete


// Database : array

app.use(express.json());

const Foodmenu = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "veg", price: 100 },
  { id: 3, food: "Chicken", category: "non-veg", price: 1000 },
  { id: 4, food: "Mutton", category: "non-veg", price: 1500 },
  { id: 5, food: "Momo", category: "veg", price: 300 },
  { id: 6, food: "Chai", category: "veg", price: 50 },
  { id: 7, food: "Rajma", category: "veg", price: 300 },
  { id: 8, food: "Roti", category: "veg", price: 20 },
  { id: 9, food: "Lolipop", category: "non-veg", price: 700 },
  { id: 10, food: "Kebab", category: "non-veg", price: 400 },
  { id: 11, food: "Paneer", category: "veg", price: 800 },
  { id: 12, food: "Egg Curry", category: "non-veg", price: 300 },
  { id: 13, food: "Salad", category: "veg", price: 100 },
  { id: 14, food: "Shourma", category: "veg", price: 300 },
  { id: 15, food: "Butter Chicken", category: "non-veg", price: 900 },
  { id: 16, food: "Mushroom", category: "veg", price: 700 }
];


// user jobhi add krega food vo idhr jaiga
const AddToCart = []

// Any one can see these fooditems
app.get("/food", (req,res)=>{
    res.status(200).send(Foodmenu);
})


// Authentication idhr hi krvado
app.use("/admin",Auth)


//  Admin kese pta chlega kon hai  
app.post("/admin", (req,res)=>{
        Foodmenu.push(req.body);
        res.status(201).send("Item Added Sucessfully")
})

app.delete("/admin/:id",(req,res)=>{
  
        const id = parseInt(req.params.id)
        const index = Foodmenu.findIndex(item=> item.id === id);
        
        if(index===-1){
            res.send("Item doesnt exist")
        }

        else {
            Foodmenu.splice(index,1);
         res.send("SUCESSFULLY DELETED")
        }
    
})

app.patch("/admin", (req,res)=>{
  
    const id = parseInt(req.body.id);
        const fooddata = Foodmenu.find(info=>info.id===id)
        
        if(fooddata){

            if(req.body.food){
                fooddata.food = req.body.food;
            }

            if(req.body.category){
                fooddata.category = req.body.category;
            }

            if(req.body.price){
                fooddata.price = req.body.price;
            }
            res.send("Sucessfully  updated")

        }

        else{
            res.send("item no exist")
        }
  
})

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})