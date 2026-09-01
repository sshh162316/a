const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main().then(()=>{console.log("connection successfill----------------------");})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storage');
}

const itemSchema = Schema({
    item: String,
    quentity: Number
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
const addItem = async () => {
   await Item.insertMany([
    { item: "cabel", quentity: 1000 },
    { item: "nut", quentity: 2000 },
    { item: "bolt", quentity: 1500 },
    { item: "screw", quentity: 2500 },
    { item: "washer", quentity: 1800 },
    { item: "nail", quentity: 3000 },
    { item: "hammer", quentity: 500 },
    { item: "screwdriver", quentity: 750 },
    { item: "wrench", quentity: 600 },
    { item: "pliers", quentity: 450 },
    { item: "drill", quentity: 300 },
    { item: "switch", quentity: 1200 },
    { item: "socket", quentity: 900 },
    { item: "bulb", quentity: 2000 },
    { item: "fuse", quentity: 1100 },
    { item: "tape", quentity: 850 },
    { item: "pipe", quentity: 700 },
    { item: "clamp", quentity: 950 },
    { item: "bearing", quentity: 400 },
    { item: "spring", quentity: 650 }
]);
}

addItem();

