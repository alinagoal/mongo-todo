const express = require('express');
const app = express();
const PORT = 3000;
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'comments';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('comm');

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);


    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.listen(
    PORT,
    () => console.log(`alive on ${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send(
        '<h1>hello world</h1>'
    )
})