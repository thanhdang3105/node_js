import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
import express from 'express'
import morgan from 'morgan'

import handlebars from 'express-handlebars'
// const express = require('express')
// const { hbs } = require('express-handlebars');
// const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))  

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(path.join(__dirname, 'resource\\views'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
