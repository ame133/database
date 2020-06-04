const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);


app.get('/vincent', (req, res)=>{
    res.render('vincent',{
        autor:'America Chavarria',
        title:'VINCENT VANGOGH',
        year: new Date().getFullYear()
    });
});

app.get('/edvard', (req, res)=>{
    res.render('edvard', {
        autor:'America Chavarria',
        title:'EDVARD MUNCH',
        year: new Date().getFullYear()
    });
});

app.get('/Davinci', (req, res)=>{
    res.render('leonardo', {
        autor:'America Chavarria',
        title:'LEONARDO DAVINCI',
        year: new Date().getFullYear()
    });
});

app.get('/rivera', (req, res)=>{
    res.render('diego', {
        autor:'America Chavarria',
        title:'DIEGO RIVERA',
        year: new Date().getFullYear()
    });
});

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor:'America Chavarria',
        title:'PABLO PICASSO',
        year: new Date().getFullYear()
    });
});
//conexion con mongodb
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://ame13:ame123@chavarriairan-tc7sc.mongodb.net/hbs?retryWrites=true&w=majority';
mongoose.connect(cadena, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida :)')
})
.catch(err=> console.log(err));

//arrancar el servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
})
