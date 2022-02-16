const express = require('express')
const app = express()
const path = require('path');
const port = 8000

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../script')));
app.set('view engine', 'ejs');
app.set('views', './views');
const produtos = {data: [
    {
        id : 1,
        nome: "Patinete VH - Ultra papido com colocaracao vermelho amarelo - morotr N3v alta velocidade",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Esse patite tem dendo do seu modelo o melhor alacance de velocidade do mercado, nele vc pode controloar a velocidade do seu sistema inteiro, Esse patite tem dendo do seu modelo o melhor alacance de velocidade do mercado, nele vc pode controloar a velocidade do seu sistema inteiro,Esse patite tem dendo do seu modelo o melhor alacance de velocidade do mercado, nele vc pode controloar a velocidade do seu sistema inteiro",
        promocao: 10
    },
    {
        id : 2,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Feito para voce",
        promocao: "sem promocao"
    },
    {
        id : 3,
        nome: "Patinete VH",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 10
    },
    {
        id : 4,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 10
    },
    {
        id : 5,
        nome: "Patinete VH",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 10
    },
    {
        id : 6,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: "sem promocao"
    },
    {
        id : 7,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais", 
        promocao: 10
    },
    {
        id : 8,
        nome: "Patinete VH",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais"
    },
    {
        id : 9,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 7
    },
    {
        id : 10,
        nome: "chuveiro",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAD5CAMAAAAAwWn6AAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHrpZrAAAADnRSTlMA2+X88dK9yJesgGQlR9coWzwAABHiSURBVHic7Z0JgtsoEEUFYgfd/7rzqwoQ8tLOxO5YslXJJHHG3dHTr41FeJpOO+2000477bTTTjvttNNOO+20007bh5WlvPsSftXKEvxM5vJngpYcrDaGGWdjjE0fxllytJoIjdGEqRVeGG3D8u4re5EtKaoGSEaQRsGYU8X87gt80hCCjgErHyE2SMs/8Vqb4wYoQtBppQY+RhyUtPTDUpzqIwYoPNSKgnpjprtrBeRfPL/3UAEKD/Ucbxo64r9rzBWSOS1zWvq/9gABSh6Ki9fMB0LFiFeYAtndlRG99Syo1n7HjlvgodoqypfdNINeUdbEM5iXn76C7tFxy5IcIZF+Vl2Z1k1T+LBy0VMngDvSOH3XkvX0nt/qdiQoPNQzn6ZLVleUuskJN3Ux0I+Uc04hhIjyqYSyMXaj4rIPQSmHcgRWSTiT3BCTdAlEFdKyLDnzLxXUrZwclp3UsaBoFd4oKFIMiCiHsrvVYlBT5spJiQRswMlLgeXAEenxcumCerWqOZgD5wwPeIug4qEAnEF4ZY2T044LiYz4ckJ3B8CYpEOfXWJQ4gx8x/zGHGOamZvBfyvokgiQu04xZZuSG05cVgiNryw5aBl5mLksM4vJQxEX2G8TPBmgSm2FtLoOWWbzrwSFgJGbE8OIc+fUW1ClyT/Bl4E3ZXgjXWpclFH0p6VkfIeSjHDOSKOECU5KSl5bAQThPBq1fubXAQlDqlxFnNufZh40cW7V1T8lAKmy4H9Tep3TRBVQxXnGi9lMGcA+6Zn7HxsTczKoU/xtK9v6m1Hx9wCRQ3F/Kdujgg10K6Fc0hiAZYl8OzR5J0rHPHv8lTK5GKiON4NIm1Qst7f8PQHaOEOwZtCwkWr1K3wYKUVOlJbzQO1IzIgo1+FXAZFMgqOiP+OmIASLxq1JyDbezXOekGLMkqA8FIwl4514VYVriTiioAbckq2/IiReDrhIH0rJwK3pjqIFpLp6rOSO1UFzIl+Ef85Tnq3zNJeTnDclG8eDKjQABq8Uja3qd8CdNHPITS7HoNFR5xB7XGpHYfpaQHgoRZilWiUVywlf+wP/feSUQRWe4o/uvdYp44JYwYgytyR4saNsk6yNJWrFvpoBmIrmMot7gcqSCwVvNB0UhPgG+N2j0sq/+DpIKYIUgQIiSCtm5UP8MR8LCNEjXSMkNohBvAMsuEatpwxn9ckCFXUdqRaeu1BBgK9S7lElKB6VxERyFk5KHZQ56Xe5AmdfUStJQO5TfENxlXA1vJBUmEjAZUnUbkOTPKE3dSQQ3FOXjBCEgnBlb+MUFTVss494Qy7oIyy4DQQ0GLvgr2pUhpLtHJYWjCg5kTk76JOQlGIowbCHVre8ZZxgSEBuVmj+JnhkGGvyBL9EvUYScuyswCoBxQFFhCZb9VIoEyH/5GRNLNSaWgtuRVHp9eyCpLFQcN9crrnIWMd48CsU3Ccg2UN19dAO6C81DFLKWMBMAvBEjYdMVLlVypFJyAXcjAGVnqekHMb6xlANSZRYHUqLhcKaagxkxE0CGTINojIrKqnIZBaki9O4AS3pkldZDM/+EpAnY7gGiofeVrDWahZwCTLzlCb86ygE0wKHslOEgoqKAkIRccl9TqAEjQSD74pBpINoaiJnzlRCJK/qeUkSlQmlBC+4PZptAGCC81KqttwD/93SAk0Xyjj8lm4gY0eJkmECO2gKjvxqphmAPMG1FfwT+Uajg8HXx6INxeVSEEmuQGK4oCVuBdGiQ1jGRM6cUU0iMKhh5742BM2+mpcwG7gEeypcxyK/5r9dOeHJGLpF/qIwdLy48kkEgg/uBH8qZfbSoCKu8kT+6aKmZBonkiwg6cTIokWLXGrpmuEATucF9wAJlFKpgXvS2JPzLnwV3x0az6QpqpHiZJP+fugx5lDy9ivfdCIg8RFgppClpLAsM66LuhaLUiF5xC2QsIaisoGcFSUPzor3hKAolwI/W27tcsGtDQt5ACVeauwSj2jgHWh9cF1wTk/FkXrDv+XjNk1LG1q7mKFGiH9KBmW+TAnG052ntQvq0MhNUe2RFpcpIo0uGUog7UM1p6eEDKOM47s4RRugqw7IlR65FqI6Q51dJFKXNDd2KQelMXqjNldhwPmEcwogrSnRQMCOfJcRKD0yMGk066h3Vsos00zJKVEji3pgkG/gUdS1lYKAVsVx1kHGhIIT/DOSf5Ko2VAkmoBkbJCxcF88igLGHwsLz/OV1Kw7wnuOry65rIAXiBKBVAGpWeRCH7gih4nnggP6EhpBkLdquJmnZhTNm6KLQ/mYEi4/ZqZzE+q3LgGi4gsX8U8eHQb67uh5kO0gN+poRP6x1MGlJ/G4CPK09RZwk005AGVsi9BLYjSwwxXjK+NkDCQEKuiWhYYDhqqiN1NQKB8xJrQyKBXovtEfUFuN4QX8kzIQ6j3FiF1IeSqJ+HfxJgy46LY+q14VkJcj7DB/cummIXFhaLMTkC/U+TRmZVRkUxsKTXVAT09CJrRtCEyqDqkY7gHxXjsjKUUbA/Gi8pF/JkPpVUFT5zLPmlsuuc/jcQTWqYnt7JAbWm0WUA18aLrSOJFSeOoQBi3SpEkEjJmiQyyiD3Xcrs4O3Sr+JuDPuBVEitxEI4g5ouVDK0r/EsaXGHnnGLkg/X3qXK+MsxVPSWwmbd1AyRnGNj6ZJrzXVBSZJl3I7TC0hyNikI9YhLciwYLIIgMvC/Jr4kSDYQdyVmRSlH8kWUjoKLPk5+kmclDXB+7Kbqelm4arg6584XHZLWzU1mHIg6bURSKKoEPgORoiO8hGLQHSLwoPkjG/R6r6K9Sr18GzKiPklpD+PRQIawY++wd8/L2pmtE8FY+QqeVF6kXhyGjBHZUEuOOiaYRsM4cf98Ok3svwxJBG1TDRZHnavXkqTYThBvf5GXT38c/WVJBeauDyko2muTUaSlKnYAqNFQPaOvgGar6z6LfRTbkst+OVeGwFaaZNiHJMdlelMadvk4lsLv3JTG1Z0jDNMiy+wXwbVcL1U9KUc2aaDkZySa9Wb7CFJ2DndcpQ+zqoVsxsZAvG3QSz5cuSl0Q/nhgc1xh5lcOQ/6L3I1KkoqziK4PvB8iWT4CjaVRdA1Cm1/4sAOGe1jS8umrKryufriur+OFlIY6T7y/Kt4Xsk9vIOxSAVPnER3GXHzsouSffFd2Wiwmnzq6auTNSwLvqrrIU9y/42BbBEWe1sYYSqvafDKtLTs4OCxvr4mL7prLsQlMU3EzXPuHf4YmJu9b6EfrUs3t0FcRXp8mdzLOuizd9vrzPlK94/5qPLZu+3mQHxkdfZX3kKSya/RPjBV9ZoGp88AwZQL9FvvFym5LU5vQFoQdfhCY0yjxrjB1TlrXrYoCW4QIvJL5JvsEyx4yhlczYvezR5h/qTpTrkLFC0uYhQ+k5ySrpS0ZFr7BMyW+WRUxPM89wt0dCTlRlZJ6HZ+UZE3xUHHLn2wWeWOYiLcszPBtEA99HX0QzwzI6ESVpCbs5Z2L3/BeX/ueWaHhcGzneF4XUkR59EboiGXIypOfZ3Ii2dCfeeWXJ0GIbL/+o1sY93I+HQads4SBIy20Asup+t/FlXrEhNtvK5ePFLt4vRaLTZFbrCHepoVhJ0q9417qdmdcRf/Q7GrkQJS1YtAHHfnVENZh13QgT+66J2ppzLbgJa+pOWwrgWnVevzT/QgvK1k0w0bQdmX3nad3qLutDA+0s+4tpHVXVIccOdu3dt4CMITNV0ag6jDA15pqti7i1a5/btiPdBlYPS+tbLdCcjkBq3SHr+K8PKubRjO2QK+a7OX60RA2ndGh6UHIU8oqywc5tkIaR57s5frTgva3T4n3Qy0puXNbepKwTAdBzDxtpf7AOGaPpMVh3Do9m7lDKBIfZt5KpQkZy17tK/khJmLuuIIB0VhjDj0oqdQdQnHbfkOyutNK4gWw73R8mn2b+3Rw/Wqr1A5Cju17l1weU+4YMfVQ4Qiqt/1fyOQCkDO63kP3hjAeU5hCQtF+IpewxaVt2FSf9Iy0PABk3kOKuF3nH3qE8jpLMeKGkaHiVgI6tZJCYtAJ5oxu4TXkUJeuU20Xi6VJeOOyNuDQHgPQiZIW0pKTSt5JrzUTmgErW3MqQ8lyYuVUk72lpjgNJW+MqlK1Kbrue8dE/fd377BwyuqokQ9rurg3o2l156qfpeAx3pXaHn19L1zF5KyTro9Xjc1H7Tzzc04WwKmmtuWoFLihl7upI7tqU/Lnj6VE5PG98nOx6CdmVvNHujEK2HR6HyK6ADGJmG5P33HU8BIDWlM1BICUmTRXSmpujyYaoxnMOeLbuGJDMyEryw8U3pj82ZbJDGm3qCSu7h4yDkjW73tOxRaSc5FCVpES7e8gak6kfrdEHzXfr5OCvEpq7h4wdsp6PYu5nnX4gRwWsW+kOBbkq+ZO7bijl5+4ha+JhSOZs4+XbVVLpayX3D9mU1KuS95z14kCgtuJ8AMhWQnQ7mOl+lbxSsi1PHgMyDUreTzsDo6mF8jiQ/MCcaWds/eCuY3o16y/7d9coQhKkHBqj783U3co8B1FS+h3e3C/59Scl9UUvcJDE45qSupUQc6WjHZtXPfrrgZRMVUk54shcEo4Nuj6suzbIOtS6FnLk3JwpdyBIPtOBz4RTdquk3fy2iUlzOMhwV0mrtkeRbccgsmB7CMgek9IMXAfkmHcuY1IdBLK6az1T1NxCtCvj1Xhy75CxK5l777qNycsDAi+VPIC7xsFd29GFZiQcfumMY3ZVB2gGYnfXLNvKfVfSdiWt7ZBbbz1I4tkqWR/S2eZV/jlG5RiPh0g8cUg8oqRAtnN/r0vIhZbqGImnlsmkBiV7IK4Hd96qk8eBrKdUZn4IZlTy8tzOS0rZBMqvHz4U9Fbj9Z6upJxg3Mdcl5i36qS82Dtkj0nVDlHQ6xHVDXClujzwWR0i8bgxJkXJlU6CVPEZufzImbut5N4h28RAqseaONtbn/YIryp5msq0LIkhbyi57029Q51sj8F0Jf36g09noxO+2m6CCyV3D9mVbAeV9v6un1Zj+RzrSIfUHFNJVxkFkp7abedvD8YjMJQZdyu7qmNADjFJJ6tcEDbK8Zj5IdseTkl+ArsVzHYylq/P16+96+Fici0h9cw9r9pxPOPhsyxla14vlFQHgKxHlSk5STDK88oXZ3/58dgLrQ7mrkEOnuXntpsHXtpVINY3yqe00OfM/OJB3C+wXkBSPZUNFV/X0zz84KUrWIVrjxbKbQjv5vjRYmiUIdYfPmY5WleOh+RPehhPv2D2es5HexR230qGTum6u25mAy6fpLz2Wfrl4dEEb7W65YzWYFcX3P4+OOfVq3ZayI6fv58IUmYGQurbOtfDzW7yXLyUL3k3xs8W2rYI2xjvPvvxg+35kIFphewHDmn3P+DkwLCHZxS929ogRC6ZLrhd/HDM222Tswbwc++Mk3w4g5w8bfhpiJ+46up5nZWtO/R37qsTHWm5ZBTGwHuQsxz5xC3BUpay2rsv83mLaUn0+PW+j3140uhwfTr14qMhE7pWTR8G8O4L+U2j/EFJZd/zik8aYjLwuSXvvpDfNJdypOMef/kjqN5rqJX8+RP7Ht4/aciu5K4frmT97KadjyWesxh5lVl9dHbFSMTx5zS9+0J+00Kdv/lsSKt4hmrfU27PGvXn887PuXqBxZ2fcvUKKyfkh1iJOz9e7xVW3L6P9XyJnZCfYovb+bOsr7DvgIzfAbn7uf6n7YT8FMtx/ujBJNvyDZCnkp9i2X0H5GdP8JBlf0J+hn2Hu56QH2JfEZPpG5RMX6Gkn/e9LfcV9h2Q9gsgw3dA7nyr/CsMkPvftfqsfQVk/AbIoPb+QMALLNpvgFRf4K6A/PgNLpR4vgDyK5T8BkinvwJy3x/q+hL7CiX9Nyjpd/2B2S8yv/enkl9hXwFpT8jPsAJ3ffc1/L7ZL4Asdv7o57TYij8hP8O+w12/BPKjn51k+w5I/wXPvizf8MREDPPH967Zuvmzj4uA+UAnDX22lMXyuUqfvdScnaPToj57V29ymo5V+nBIz2dHfbi7aj476rMTz8QnnH16CYkE+eFCEqX+/FWC00477bTTTjvttNOObf8BUcLeMxxYWMIAAAAASUVORK5CYII=",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 5
    },
    {
        id : 11,
        nome: "Chuveiro",
        img:"http://decathlonpro.vteximg.com.br/arquivos/ids/2419905/scooter-mid5-black---green-1.jpg?v=637060661182800000",
        price: 250,
        descricao: "Maneiro ate de mais",
        promocao: 50
    }
]}


app.get('/', (req,res, next)=> {
    res.render('home', {produtos:produtos});
})


app.get("/produto/:id", (req, res, next)=>{
    const id =  req.params.id;
    const produto =  produtos.data.find((e)=> e.id == id);
    res.render('produto', {produto:produto});
})


app.listen(port, () => {
    console.log(`site rodando -> http://localhost:${port}`)
})
