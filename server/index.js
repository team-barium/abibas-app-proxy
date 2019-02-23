const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const PORT = 3000;
const { details, suggestions, reviews, navBar, colorChange } = require('./controllers.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/abibas/product', details);
app.use('/abibas/color', colorChange);

app.listen(PORT, () => console.log('Listening on PORT', PORT));
