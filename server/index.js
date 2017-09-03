const functions = require('./module');
const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express();


//module.exports = printHello; // module это никак не связано с названием файл

// const server = http.createServer((req, res) => {
//
//     const index = fs.realFileSync('index.html');
//     res.write(index);
//     res.end();
// });

app.use(express.static('public'));

app.get('*', (req, res) => {
   res.send('404');
});

app.listen(process.env.PORT || '8080', () => {
    console.log('🚭');
});