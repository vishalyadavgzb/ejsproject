const express = require('express');
const path = require('path');
const makeAdmin = require('./makeadmin')
const connect = require('./connection');
const user = require('./routes/user')
const student =require('./routes/student');
const app = express();
app.use(express.urlencoded({ extended: false }));

connect();
makeAdmin();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(user);
app.use(student);

app.listen(3000, (err)=> {
    if(err) {
        console.log(err);
    } else {
    }
});