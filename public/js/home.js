document.body.onload = buscarDadosServidor;



function buscarDadosServidor(){
   fetch("http://localhost:8000/servidor", {
       method: "GET"
   }).then((data)=> data.json()).then(buscandoDados).catch((error)=> console.log(error));  
}


function verificaPreco(price, desconto){
    if (desconto != null) {
        return (price -  (parseFloat(price) * (desconto / 100)))
    } else {
        return parseFloat(price);
    } 
}


const section = document.getElementById("itens");

function buscandoDados(data){
    
    data.data.map((item)=>{
        //criar elementos vizuais
        const newDiv = document.createElement("div");
        const img = document.createElement("img");
        const price = document.createElement("p");
        const descricao = document.createElement("p");
        const promo = document.createElement("p");
        const a = document.createElement("a");
        a.href = `/produto/${item.id}`;
        img.src = item.img;
        price.innerHTML = "R$" + verificaPreco(item.price, item.promocao);
        descricao.innerHTML = item.descricao;
        descricao.style.fontSize = 10;
        descricao.style.color = "green";
        promo.innerHTML =  item.promocao == null ? "0%" : item.promocao + "%";
        promo.style.color = "red";
       a.appendChild(img);
       newDiv.appendChild(a);
       newDiv.appendChild(descricao);
       newDiv.appendChild(price); 
       newDiv.appendChild(promo);
       section.appendChild(newDiv);
    }); 

}


