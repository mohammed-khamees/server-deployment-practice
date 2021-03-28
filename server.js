'use strict';

const express = require('express');
const app = express();

//error handlers
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/data', (req, res) => {
	res.send('Hello World');
});

app.get('/err', (req, res) => {
	throw new Error('somthing went wrong');
});

function start(port) {
	app.listen(port, console.log(`Listening on PORT ${port}`));
}

//error middlewares
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
	app,
	start,
};
