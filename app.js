const express = require('express');
const app = express();
const routes = require('./routes/main.js')
const port = 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes) 
app.use('/about', routes)


app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log(`Server is rise in http://localhost:${port}`);
}) 
