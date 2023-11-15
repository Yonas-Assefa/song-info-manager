const express = require("express");
app = express();
const PORT = 5000;

app.listen(PORT || 5000, () => {
  console.log(`i am running on ${PORT} port`);
});
