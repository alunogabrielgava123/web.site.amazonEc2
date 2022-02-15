const express = require('express')
const app = express()
const path = require('path');
const port = 8000

app.use(express.static(path.join(__dirname, '../public')));

app.get('/servidor', (req,res)=> {
    res.json({data: [
        {
            id : 1,
            nome: "Gabriel Gava Pinheiro",
            telefone : "999852325",
            produto: "desktop"
        },
        {
            id : 2,
            nome: "Mateus Gava Pinheiro",
            telefone : "111111",
            produto: "coco"
        },
        {
            id : 3,
            nome: "Solange Gava Pinheiro",
            telefone : "9323932",
            produto: "Patinete"
        },
        {
            id : 4,
            nome: "Juraci Gava Pinheiro",
            telefone : "992334345",
            produto: "amigos"
        }
    ]})
})

app.listen(port, () => {
    console.log(`site rodando -> http://localhost:${port}`)
})
