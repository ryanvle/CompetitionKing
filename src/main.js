const express = require("express")
const app = express()
const userRoutes = require('./api-routes/userRoutes')
const CompetitionRoutes = require('./api-routes/CompetitionRoutes')

app.use(express.urlencoded())
app.use(express.json())


app.use('/users', userRoutes);
app.use('/Competition', CompetitionRoutes)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.listen(80);
