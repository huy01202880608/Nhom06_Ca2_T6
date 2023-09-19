const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, '../views/partials');
app.set('views', static_path);
app.set('view engine','hbs');

app.get('/', (req,res)=>{
    res.render("home")
})

app.listen(port, ()=> {
    console.log(`listing to the port at ${port}`);
})