const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended:false });
const port = 12345 ;

app.get('/list_all',function(req, res){
    let list = JSON.parse(fs.readFileSync('list.json'));
    if (list!='') {
        var out = '';
        for(var i in list) {
            out += `${i} : ${list[i]}<br>`;
        }
        res.send(`<h2>${out}</h2>`);
    }
    else {
        res.send('no data');
    }
});

app.post('/search_name', urlencodedParser, function(req, res){
    let list = JSON.parse(fs.readFileSync('list.json'));
    var id = req.body.id ;
    if (id in list) {
        res.send(`<h2>${id} : ${list[id]}</h2>`);
    }
    else {
        res.send(`<h2>${id} is not found</h2>`);
    }
    
});

app.post('/add_person', urlencodedParser, function(req, res){
    let list = JSON.parse(fs.readFileSync('list.json'));
    var id = req.body.id ;
    var name = req.body.name ;
    if (id in list) {
        res.send(`<h2>id:${id} exist!!</h2>`);
    }
    else {
        list[id] = name ;
        fs.writeFile('list.json',JSON.stringify(list),()=>{
            res.send(`<h2>${id} : ${name} is added`);
        });
    }
    
});


app.post('/delete_data', urlencodedParser, function(req, res){
    let list = JSON.parse(fs.readFileSync('list.json'));
    var id = req.body.id ;
    if (!(id in list)) {
        res.send(`<h2>ID : ${id} doesn't exist!!</h2>`);
    }
    else {
        delete list[id];
        fs.writeFile('list.json',JSON.stringify(list),()=>{
            res.send(`<h2>${id} is removed`);
        });
    }
    
});

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log(`you are listening to the port ${port}`);
});
