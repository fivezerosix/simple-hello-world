const express = require('express');
const logger = require('morgan');
const app = express();
var randomInt = require('random-int');

app.use(logger('dev'));

const worldValues = ['orbis', 'world', 'mundo', 'monde', 'welt', 'мир' , 'verden' ]

app.get('/hello', (req, res, next) => {
	  res.json({
	    value: worldValues[randomInt(0, worldValues.length - 1 )]
	  });
});

module.exports = app;