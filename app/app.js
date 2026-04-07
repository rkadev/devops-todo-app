const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.send("🚀 Todo App Running in Kubernetes!");
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json(todo);
});

app.listen(3000, () => console.log("Running on port 3000"));
