const express = require('express')
const bodyParser = require('body-parser')
const recipeRoutes = require('./routes/recipeRoutes')
const app = express()

app.use(bodyParser.json())

app.use('/api', recipeRoutes);
const port = 3005
app.listen(port, () => {
    console.log(`Server in runing in port ${port}`);
    
})