const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers.js');

//Variable de entorno global process.env.PORT
const port = process.env.PORT || 3000;

//Refiere a la carpeta public donde se alojan los archivos
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'hbs');

//Express HBS engine
hbs.registerPartials(__dirname+'/views/parciales')

app.get('/', (req, res) => {
  //res.send('Hola mundo');
    res.render('home.hbs',{
        ubicacion: 'Inicio',
        nombre: 'Matias vivas castillo',
    });
})

app.get('/about', (req, res) => {
    //res.send('Hola mundo');
      res.render('about.hbs',{
        ubicacion: 'About',
        nombre: 'Matias vivas castillo',
      });
  })
 
app.listen(port, () => {
    console.log('escuchando peticiones en '+port);
})