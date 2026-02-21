const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL: url helps to connect with cluster
// username password cluster 
// @ == hexadecimal : 0x40
const url = "mongodb://Shreygoel:ShreyG0e1%4023@ac-sueqhml-shard-00-00.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-01.9tsduo1.mongodb.net:27017,ac-sueqhml-shard-00-02.9tsduo1.mongodb.net:27017/?authSource=admin&replicaSet=atlas-d3rvx5-shard-0&tls=true";
// const url = "mongodb+srv://Shreygoel:ShreyG0e1%4023@codingadda.9tsduo1.mongodb.net/?tls=true";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...


  // Find All Documents: Documents ko laana 
  const findResult =  collection.find({});
  // const ans = await findResult.toArray();
    // for await (const doc of findResult)
    // console.log(doc);
  // console.log('Found documents =>',ans);




//   // Insert a single Document
//   const insertResult = await collection.insertOne({ name: "Saumya", age:23 });
//  console.log('Inserted documents =>', insertResult);

//   // Insert a many Document
// const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);


// Find Documents with a Query Filter
const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());