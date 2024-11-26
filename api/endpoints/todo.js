const express = require('express');
const { getDB } = require('../db');

const router = express.Router();

router.get('/todo', async (req, res) => {
  const db = getDB();
  const collection = db.collection('todos');
  try {
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve' });
  }
});

router.post('/todo', async (req, res) => {
  const db = getDB();
  const collection = db.collection('todos');
  const newTask = {
    text: req.body.text,
    done: false
  };
  
  try {
    const result = await collection.insertOne(newTask);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(500).json({ error: 'Could not post' });
  }
});

module.exports = router;
