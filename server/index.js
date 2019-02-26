const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const PORT = 3000;
const { initialize, details, suggestions, reviews, colorChange, reviewsStats, search } = require('./controllers.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/abibas/product', details);
app.use('/abibas/color', colorChange);
app.use('/suggestions' , suggestions);
app.use('/reviews', reviews);
app.use('/product', initialize);
app.use('/search', search);

app.listen(PORT, () => console.log('Listening on PORT', PORT));
