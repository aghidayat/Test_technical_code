// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return
app.get('/', (req, res) => {
    // console.log(req.query.number);
    let firstNumber = req.query.number;
    var digits = (""+firstNumber).split("");
    let finalDigits = digits.map((item, index) => {
        
        let zeros = new Array(); for (let i=0; i<=index; ++i) zeros[i] = 0;
        zeros.toString();
        return item + zeros.join("");
    })

    let data = {
        message: 'success',
        data: finalDigits
    };
    res.status(200).send(data);
});

// defining an endpoint to return ganjil
app.get('/ganjil', (req, res) => {
    // console.log(req.query.number);
    let firstNumber = req.query.number;
    let bilangan = new Array(); for (let i=0; i<firstNumber; i++) bilangan[i] = i % 2 == 1 ? i : null;
    let ganjil = bilangan.filter(item => {
        if (item != null) {
            return item
        }
    })

    let data = {
        message: 'success',
        data: ganjil
    };
    res.status(200).send(data);
});

// defining an endpoint to return prima
app.get('/prima', (req, res) => {
    let firstNumber = req.query.number;
    let bilangan = new Array(); for (let i=0; i<firstNumber; i++) bilangan[i] = i % i == 0 ? i : null;
    let ganjil = bilangan.filter(item => {
        if (item != null) {
            return item
        }
    })

    let data = {
        message: 'success',
        data: ganjil
    };
    res.status(200).send(data);
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});