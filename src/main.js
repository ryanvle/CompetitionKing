const express = require("express")
const app = express()
const sql = require('./services/SqlConnection')
let NewSql = new sql();
NewSql.EstablishConnection()





app.use(express.urlencoded())
app.use(express.json())

const userRoutes = require('./api-routes/userRoutes')
app.use('/users', userRoutes);
app.listen(80);
