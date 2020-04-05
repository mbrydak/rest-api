require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected to database'));

app.use(express.json());

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);
app.listen(3000, () => console.log('The server has started'));
