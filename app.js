const express = require ('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
  res.render('home.ejs');
  //views/home.ejs
});

app.get('/about', (req, res, next)=>{
  res.render('about.ejs');
});

app.get('/photo', (req, res, next)=>{
  res.render('photo.ejs');
});

app.listen(3000);
