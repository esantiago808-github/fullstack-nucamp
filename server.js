const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

//the campsites folder followed by the import = campsiteRouter
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

//will automatically server index.html without specifying it if the file exists
app.use(express.static(__dirname + '/public'));

//middleware function - if a html file is not found in public, then it will default to this message
app.use((req, res) => {
    //console.log(req.headers); morgan will handle the request going forward
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server for NuCamp</h1></body></html>');
});

//creates instance of server class and starts listening to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});                                                             //you can npm start from here

