const express = require("express");
const personRoute = require("./routes/personRoutes");

require("./config/db").connectToMongoDB(); // Connect to MongoDB
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   return res.json({ status: true });
// });

app.use("/", personRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});

module.exports = app;
