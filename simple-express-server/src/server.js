/**
 * Simple Express server for managing a list of tasks.
 * 
 * Endpoints:
 * - GET /: Returns a "Hello World" message.
 * - GET /tasks: Returns the current list of tasks.
 * - POST /tasks: Adds a new task to the list.
 * 
 * @module server
 * @requires express
 * 
 * @constant {number} PORT - The port number the server listens on.
 * @constant {Array<string>} tasks - The in-memory list of tasks.
 * 
 * @function
 * @name GET /
 * @description Responds with "Hello World".
 * 
 * @function
 * @name GET /tasks
 * @description Responds with the current list of tasks.
 * @returns {Object} 200 - An object containing the tasks array.
 * 
 * @function
 * @name POST /tasks
 * @description Adds a new task to the list.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.text - The text of the new task.
 * @returns {Object} 200 - Success message if task is added.
 * @returns {Object} 400 - Error message if input is invalid.
 */
const express = require('express');
const app = express();

const PORT = 8001;

app.use(express.json());

let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET /
app.get('/', (req, res) => {
  res.send("Hello World");
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string') {
    return res.status(400).json({ message: 'Invalid task' });
  }
  tasks.push(text);
  res.json({ message: "Task added successfully" });
});

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});