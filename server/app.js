const express = require("express");
const studentRoutes = require("./routes/index");

const app = express();
app.use(express.json());

// routes
app.use("/students", studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
