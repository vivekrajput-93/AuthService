const express = require("express");
const {PORT} = require("./config/ServerConfig")

const app = express();


const StartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
  })
}

StartServer();