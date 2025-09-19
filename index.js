require('dotenv').config();
const express = require('express')
const app = express()

const router = require("./routes")
const errorHandler = require("./errors/errorHandler")
const errorBuilder = require("./errors/errorBuilder")

const sequelize = require("./config/database")
console.log(sequelize)

// Access environment variables
const port = process.env.PORT;

app.use(express.json());

app.use("/api", router)
app.use(() => {
    throw errorBuilder.build(404, "unknown resource")
})
app.use(errorHandler)

const bootstrap = async () => {
    await sequelize.authenticate()
    await sequelize.sync({alter:true})
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

bootstrap()



