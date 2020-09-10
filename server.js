const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

//middleware function
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//creates instance of server class and starts listening to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});                                                             //you can npm start from here

