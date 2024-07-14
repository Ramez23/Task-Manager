const express = require("express");
const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoute");
const taskRouter = require("./routes/taskRoute");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(categoryRouter);
app.use(taskRouter);

module.exports = app;
