const tasks = require("../models/taskModel");

// CREATE
exports.createTask = (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  tasks.push(task);
  res.status(201).json(task);
};

// READ ALL
exports.getTasks = (req, res) => {
  res.json(tasks);
};

// READ ONE
exports.getTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ msg: "Task not found" });

  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
};

// DELETE
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ msg: "Task not found" });

  tasks.splice(index, 1);
  res.json({ msg: "Task deleted" });
};