const express = require("express");
const {PORT} = require("./config/ServerConfig")
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index")

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', apiRoutes)

const StartServer = () => {


  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
  })
}

StartServer();