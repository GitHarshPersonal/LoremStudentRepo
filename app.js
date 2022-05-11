const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// EXPRESS
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/home', (req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
});
app.get('/about', (req,res)=>{
    res.status(200).render('about.pug');
});
app.get('/services', (req,res)=>{
    res.status(200).render('services.pug');
});
app.get('/productivity', (req,res)=>{
    res.status(200).render('productivity.pug');
});

app.post('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
})

//START SERVER
app.listen(port, ()=>{
    console.log(`The server has been started on port ${port}`);
});