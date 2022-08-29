const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Static file server http://localhost:${port}`);
});
