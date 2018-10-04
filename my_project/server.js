const express = require('express');
const app = express();
const port = 15555;

app.get('/get_data' , function(req, res) {
    res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`);
});

app.get('/ajax_data', function(req, res){
    res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`);
});

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log(port);

