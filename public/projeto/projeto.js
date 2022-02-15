document.body.onload = buscarDadosServidor;




async function buscarDadosServidor() {

    fetch("http://18.230.110.34:8000/servidor", {
        method: 'GET'
    }).then((res) => res.json())
        .then(getData).catch((erro) => console.log(erro));
}


function createNode(element) {
    return ;

}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('dados');

function getData(data) {

    const dados = data.data;

    dados.map((e) => {
        let li = document.createElement('li');
        li.id = e.produto;
        let span = document.createElement('span');
        span.innerHTML = `${e.nome} ${e.produto}`;
        append(li, span);
        append(ul, li);
    });
    
}






