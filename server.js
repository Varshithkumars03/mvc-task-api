const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

// base route
app.get("/", (req, res) => {
  res.send("MVC Task API running");
});

// use routes
app.use("/tasks", taskRoutes);

app.listen(5000, () => console.log("MVC API running on 5000"));