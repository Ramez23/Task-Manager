const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
