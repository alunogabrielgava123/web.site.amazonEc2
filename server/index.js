const express = require('express')
const app = express()
const path = require('path');
const port = 8000


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../src')));
app.set('view engine', 'ejs');
app.set('views', './views');




app.get('/', async (req, res, next) => {
    
     res.render('home');
})

app.get('/desenvolvedores', (req, res, next) => {
    res.render('desenvolvedores');
})


app.get('/portifolio/jogo-cobra', (req, res)=>{
    res.render('portifolio/jogo_cobra.ejs');
});

app.get('/portifolio/jogo-luz', (req, res)=>{
    res.render('portifolio/jogo_luz.ejs');
});

app.get("/projeto", async (req, res, next) => {
    
    res.render('projeto');

})

app.get("/portifolio", (req, res, next) => {

    res.render('portifolio');
})


app.listen(port, () => {
    console.log(`site rodando -> http://localhost:${port}`);
})
