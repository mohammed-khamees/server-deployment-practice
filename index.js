'use strict';

require('dotenv').config();
const { start } = require('./server');
const PORT = process.env.PORT || 3000;
start(PORT);
