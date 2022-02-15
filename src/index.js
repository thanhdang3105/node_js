const path = require('path');
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));
const express = require('express');
const morgan = require('morgan');

const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const routes = require('./routes')

// app.use(express.static(path.join(__dirname, 'public')))  

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
//XMLHttpRequest, fecth, axios
//http logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
