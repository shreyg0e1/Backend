// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL: url helps to connect with cluster
// // username password cluster 
// // @ == hexadecimal : 0x40
// const url = "mongodb://Shreygoel:ShreyG0e1%4023@ac-sueqhml-shard-00-00.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-01.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-02.9tsduo1.mongodb.net:27017/?authSource=admin&replicaSet=atlas-d3rvx5-shard-0&tls=true";
// // const url = "mongodb+srv://Shreygoel:ShreyG0e1%4023@codingadda.9tsduo1.mongodb.net/?tls=true";
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'CoderArmy';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('user');

//   // the following code examples can be pasted here...


//   //// Find All Documents: Documents ko laana 
//   // const findResult =  collection.find({});
//   // const ans = await findResult.toArray();
//     // for await (const doc of findResult)
//     // console.log(doc);
//   // console.log('Found documents =>',ans);




// //   // Insert a single Document
// //   const insertResult = await collection.insertOne({ name: "Saumya", age:23 });
// //  console.log('Inserted documents =>', insertResult);

// //   // Insert a many Document
// // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// // console.log('Inserted documents =>', insertResult);


// // //Find Documents with a Query Filter
// // const filteredDocs = await collection.find({ a: 3 }).toArray();
// // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());















const {MongoClient}=require('mongodb');

const url ="mongodb://Shreygoel:ShreyG0e1%4023@ac-sueqhml-shard-00-00.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-01.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-02.9tsduo1.mongodb.net:27017/?authSource=admin&replicaSet=atlas-d3rvx5-shard-0&tls=true";

const client = new MongoClient(url);

const dbName = 'CoderArmy';

async function main() {
  await client.connect();
  console.log("Connected Sucessfully to server")
  const db= client.db(dbName);
  const collection= db.collection('user');
// do operations here:-

//1//Insert a Single Document
//  const insertSingle = await collection.insertOne({name: "Tashu", age: 21, address:"Faridabad"});
//  console.log('Inserted documents=>', insertSingle)

//2// Insert a Multiple Document
//  const insertMultiple = await collection.insertMany([{name: "Ajay", age: 22, address: "Dehradun"},{name: "Manish", age: 23, address: "Goa"},{name: "Sanju", address: "Madras"},{name: "Ruchi", age: 25}])
// console.log('Inserted Documents:-', insertMultiple);

//3// Find Documents with a Query Filter
// const filteredDocs = await collection.find({ name: "Tashu" }).toArray();
// console.log('Found documents filtered by { a: 3 } =>', filteredDocs);


//4// Update a document
// const updateResult = await collection.updateOne({name:"Tashu"}, {$set:{surname:"Aggarwal"}});
// console.log("Updated document:-", updateResult)


//5// Remove a document
// const deleteResult=await collection.deleteOne({a:3});
// console.log("Deleted document:-", deleteResult);


//6// Find All Documents (Heavy tarika)
// const findResult= await collection.find({}).toArray();
// console.log("Found documents=> ", findResult);


//7// Find all Document (better : ek-ek karke process kro)
// const cursor = collection.find({});
// for await (const doc of cursor){
// console.log(doc) // Ek ek document aata hai
// }

//8// Index a Collection
const indexName = await collection.createIndex({ a: 1 });
console.log('index name =', indexName);

  return 'done';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());