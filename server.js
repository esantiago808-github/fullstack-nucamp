const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

//the campsites folder followed by the import = campsiteRouter
app.use('/campsites', campsiteRouter);

//will automatically server index.html without specifying it if the file exists
app.use(express.static(__dirname + '/public'));

    /*removed in Express Router Part 2 - start
    //router for campsiteId
    app.get('/campsites/:campsiteId', (req, res) => (
        res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`)
    ));

    app.post('/campsites/:campsiteId', (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
    });

    app.put('/campsites/:campsiteId', (req, res) => {
        res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
        res.end(`Will update the campsite: ${req.body.name}
            with description: ${req.body.description}`);
    });

    app.delete('/campsites/:campsiteId', (req, res) => {
        res.end(`Deleting campsites: ${req.params.campsiteId}`);
    });
    removed in Express Router Part 2 - end */



//middleware function - if a html file is not found in public, then it will default to this message
app.use((req, res) => {
    //console.log(req.headers); morgan will handle the request going forward
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//creates instance of server class and starts listening to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});                                                             //you can npm start from here

