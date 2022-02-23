const { urlencoded } = require('body-parser');
const express = require('express');
const userRouter = require('./router/users.rout');
const path = require('path');
const EJS  = require('ejs');
const env = require('dotenv');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
env.config();
app.use(express.json())
//app.use(urlencoded({extended: true})); 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('views'))
app.engine('html', EJS.renderFile);

app.set("view engine", "ejs")

 app.set('views', path.join(__dirname, 'views'));
//  the server only call user router 
app.use(userRouter);
app.listen(PORT,()=>{
    console.log("server start on 3000");
})