const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//  Servir contenido estatico
app.use( express.static('public') );
 
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Kevin Rangel',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Kevin Rangel',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Kevin Rangel',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});

 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})