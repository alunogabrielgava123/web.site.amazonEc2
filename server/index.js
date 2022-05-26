const express = require('express')
const app = express()
const path = require('path');
const port = 8000


app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', './views');




app.get('/', async (req, res, next) => {
    
     res.render('home');
})

app.get('/desenvolvedores', (req, res, next) => {
    res.render('desenvolvedores');
})


app.get("/projeto", async (req, res, next) => {
    
    res.render('projeto');

})

app.get("/portifolio", (req, res, next) => {

    res.render('portifolio');
})


app.listen(port, () => {
    console.log(`site rodando -> http://localhost:${port}`);
})
