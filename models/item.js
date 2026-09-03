const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main().then(()=>{console.log("connection successfill----------------------");})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storage');
}

const itemSchema = Schema({
    item: String,
    quentity: Number,
    dailyUsed : Number
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
const addItem = async () => {
    await Item.deleteMany({});

   await Item.insertMany([
   { item: "cabel", quentity: 1000, dailyUsed: 100 },
{ item: "nut", quentity: 2000, dailyUsed: 200 },
{ item: "bolt", quentity: 1500, dailyUsed: 100 },
{ item: "screw", quentity: 2500, dailyUsed: 200 },
{ item: "washer", quentity: 1800, dailyUsed: 100 },
{ item: "nail", quentity: 3000, dailyUsed: 200 },
{ item: "hammer", quentity: 500, dailyUsed: 100 },
{ item: "screwdriver", quentity: 750, dailyUsed: 200 },
{ item: "wrench", quentity: 600, dailyUsed: 100 },
{ item: "pliers", quentity: 450, dailyUsed: 200 },
{ item: "drill", quentity: 300, dailyUsed: 100 },
{ item: "switch", quentity: 1200, dailyUsed: 200 },
{ item: "socket", quentity: 900, dailyUsed: 100 },
{ item: "bulb", quentity: 2000, dailyUsed: 200 },
{ item: "fuse", quentity: 1100, dailyUsed: 100 },
{ item: "tape", quentity: 850, dailyUsed: 200 },
{ item: "pipe", quentity: 700, dailyUsed: 100 },
{ item: "clamp", quentity: 950, dailyUsed: 200 },
{ item: "bearing", quentity: 400, dailyUsed: 100 },
{ item: "spring", quentity: 650, dailyUsed: 200 }
]);
}

// addItem();

