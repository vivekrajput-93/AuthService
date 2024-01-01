const express = require("express");
const {PORT} = require("./config/ServerConfig")
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index")

const app = express();

const db = require("./models/index")

const { User, Role } = require("./models/index")



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', apiRoutes)

const StartServer = () => {


  app.listen(PORT, async () => {
    console.log(`Server Started on port ${PORT}`)
    if(process.env.DB_SYNC) {
        db.sequelize.sync({alter : true})

      }

  })
}

StartServer();