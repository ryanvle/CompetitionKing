const express = require("express")
const app = express()
const userRoutes = require('./api-routes/userRoutes')
const CompetitionRoutes = require('./api-routes/CompetitionRoutes')
let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('req-sanitizer')());


app.use('/users', userRoutes);
app.use('/Competition', CompetitionRoutes)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and MySQL API' })
})
app.listen(80);
