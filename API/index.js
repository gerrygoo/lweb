require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const { api_router } = require('./api');

const port = process.env.PORT || 8585;
const db_url = process.env.DB_CON;

mongoose
    .connect(db_url, { useNewUrlParser: true })
    .then(() => console.log('Connected to mongo'))
    .catch(e => console.log(`Failed to connect to mongo , error: \n${e}`));

express()
    .use(cors())
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/api', api_router)

    .listen(port, () => console.log(`Listening at ${port}`));