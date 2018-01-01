const express = require('express');
const path = require('path');
let request = require('request')
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/feed', (req, res) => {

let apikey = "";
let options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?sources=techcrunch&apiKey='+apikey,
        headers: {
            'content-type': 'application/json'
        },
        json: true
    };

    request(options, function(error, response, body) {
        if (error){
            console.log(error);
        }
        else{
            //console.log(body);
            res.send(body);
        }
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = 5000;
app.listen(port);

console.log('Server running on Port ', port);