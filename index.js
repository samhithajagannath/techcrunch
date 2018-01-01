const express = require('express');
const path = require('path');
let request = require('request')
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/feed', (req, res) => {

let apikey = "09bc1b5b9ddb4123a4d9386baf3cd9b0";
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

const port = 5000;
app.listen(port);

console.log('Server running on Port ', port);