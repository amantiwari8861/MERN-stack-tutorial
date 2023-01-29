import dotenv from "dotenv";
import mongodb from "mongodb";
import app from "./server.js"

dotenv.config();
const MongoClient = mongodb.MongoClient

// const port = process.env.PORT || 5000;
// MongoClient.connect(process.env.ATLAS_URI)
// .catch((err)=>{
//     console.error(err.stack);
//     process.exit(1);
// })
// .then(async client=>{
//     app.listen(port,()=>`listening at port ${port}`)
// })

// const url='mongodb://localhost:27017';
// const con=new MongoClient(url);
// console.log(process.env.ATLAS_URI);
const con=new MongoClient(process.env.ATLAS_URI);

async function getData() {
    let result=await con.connect();
    let db=result.db('sample_restaurants');
    let collection=db.collection('restaurants');
    // let response=await collection.find({cuisine:"American"});
    let response=await collection.findOne({cuisine:"American"});
    console.log(response);
}

getData();
