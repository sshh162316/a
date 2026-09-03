const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Item = require("./models/item.js");
const methodOverride = require("method-override");
const cron = require("node-cron");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views")); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main().then(()=>{console.log("connection successfill");})
    

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storage');
}

// async function test (){
//     let allItems = await Item.find({});
//     console.log(allItems);

//     for(item of allItems){
//         item.quentity = item.quentity - item.dailyUsed; 
//         await item.save();
//     }
// }
// test()  

cron.schedule("58 11 * * *", async () => {
    let allItems = await Item.find({});
    console.log(allItems);

    for(item of allItems){
        item.quentity = item.quentity - item.dailyUsed; 
        await item.save();
    }
})

// Index Route
app.get("/listings", async (req, res) => {
    let allItems = await Item.find({});
    res.render("index.ejs", { allItems });
})

// New Route
app.get("/listings/new", (req, res) => {
    res.render("new.ejs");
})

// Create Route
app.post("/listings", async (req, res) => {
    let newItem = req.body;
    Item.insertOne(newItem);
    res.redirect("/listings");
})

// Update Route
app.put("/listings/:id", async (req, res) => {
    let used = req.body;
    let { id } = req.params;
    let {quentity} = await Item.findById(id);
    let newQuentity = quentity - used.quentity;

    await Item.findByIdAndUpdate(id, { quentity: newQuentity });
    res.redirect("/listings");
});

app.get("/", (req, res) => {
    res.send("WORKING");
})

app.listen(8088 , ()=>{console.log("app is &&&&&&&&&&& listing on port" , 8088);}) 