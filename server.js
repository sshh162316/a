const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Item = require("./models/item.js");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views")); 
app.use(express.urlencoded({extended : true}));

main().then(()=>{console.log("connection successfill");})
    

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storage');
}

// Index Route
app.get("/listings", async (req, res) => {
    let allItems = await Item.find({});
    res.render("index.ejs", { allItems });
    // res.send(allItems);
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

app.get("/", (req, res) => {
    res.send("WORKING");
})

app.listen(8088 , ()=>{console.log("app is=========== listing on port" , 8088);}) 