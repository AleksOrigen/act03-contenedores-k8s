const { MongoClient } = require('mongodb');

let db;

async function connectDB() {
  const client = new MongoClient('mongodb://mongodb:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    db = client.db();
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to DB', err);
  }
}

function getDB() {
  if (!db) {
    throw new Error('DB not ready');
  }
  return db;
}

module.exports = { connectDB, getDB };
