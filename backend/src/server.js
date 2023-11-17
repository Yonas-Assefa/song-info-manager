const express = require("express");
const dotenv = require("dotenv");

//load env variables
dotenv.config({ path: `${process.cwd()}/src/config/config.env` });

//start the server
const app = express();

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`i am running on ${process.env.NODE_ENV} on ${PORT} port number`);
});
