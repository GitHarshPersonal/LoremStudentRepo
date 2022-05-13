const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactLorem');
}
const port = 8000;

// Defiine mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    desc: String
  });
  const contact = mongoose.model('contact', contactSchema);

// EXPRESS
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/home', (req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
});
app.get('/about', (req,res)=>{
    res.status(200).render('about.pug');
});
app.get('/productivity', (req,res)=>{
    res.status(200).render('productivity.pug');
});

app.post('/contact', (req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.render('contactSaved.pug');
    }).catch(()=>{
        res.status(400).send("An error occured.")
    });
})

//START SERVER
app.listen(port, ()=>{
    console.log(`The server has been started on port ${port}`);
});