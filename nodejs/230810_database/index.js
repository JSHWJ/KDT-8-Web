const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

const router = require("./routes/student");
app.use("/", router);

db.sequelize.sync({ force: flase }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
