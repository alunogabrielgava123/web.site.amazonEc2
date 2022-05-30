/**
 * 
 * Desenvolvida pelos desenvolvedores da Luna Sofware 
 * 
 * Gerente do jogo := Gabriel Gava Pinhero. Estudande de ciencia da computacao Unifil 2022
 * 
 *  Jogo da Cobrinha
 * 
 */

 window.onload = function () {

    var canvas = document.getElementById('stage');
    var result = document.getElementById('result');
    document.addEventListener("click", posicaoCheck);
    const context = canvas.getContext('2d');
    var x = 0;
    const circlo = [
        { x: 80, y: 400, r: 50, cor: 'blue', is: false },
        { x: 200, y: 400, r: 50, cor: 'blue', is: false },
        { x: 320, y: 400, r: 50, cor: 'blue', is: false },
        { x: 440, y: 400, r: 50, cor: 'blue', is: false },
        { x: 560, y: 400, r: 50, cor: 'blue', is: false },
        { x: 680, y: 400, r: 50, cor: 'blue', is: false }
    ]
    
    var posicaoClick = null;
    var estaVermelho = 0;
    var counter = 0;
    var velGame = 800;


    setCanvas();


    setCirculo(80, 400, 50, false)
    setCirculo(200, 400, 50, false)
    setCirculo(320, 400, 50, false)
    setCirculo(440, 400, 50, false)
    setCirculo(560, 400, 50, false)
    setCirculo(680, 400, 50, false)

    setInterval(game, velGame);


    function setCanvas() {
        context.fillRect(0, 0, stage.width, stage.height);
        context.fillStyle = 'black';
    }

    function setCirculo(x, y, raio, isUp) {
        context.beginPath();
        context.fillStyle = isUp ? 'red' : 'blue';
        context.lineWidth = 2;

        context.arc(x, y, raio, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
    }

    function posicaoCheck(event) {

        if (event.x > 43 && event.x < 133) {

            posicaoClick = 0;
        }

        if (162 < event.x && event.x < 253) {

            posicaoClick = 1;
        }

        if (281 < event.x && event.x < 376) {

            posicaoClick = 2;
        }

        if (408 < event.x && event.x < 493) {

            posicaoClick = 3;

        }
        if (524 < event.x && event.x < 613) {

            posicaoClick = 4;
        }
        if (644 < event.x && x < 737) {

            posicaoClick = 5;
        }

    
    }


    function posicaoVermelho(value) {
        estaVermelho = value;
    }


    function game() {

        var randonValeu = Math.floor(Math.random() * 6);
        


        setTimeout(function () {

            
            posicaoClick = null;

            for (let i = 0; i < circlo.length; i++) {
                if (randonValeu == i) {
                    setCirculo(circlo[i].x, circlo[i].y, circlo[i].r, circlo[i].is = true);
                    posicaoVermelho(i);
                } else {
                    setCirculo(circlo[i].x, circlo[i].y, circlo[i].r, false);

                }
            }
        }, velGame);


    if (estaVermelho == posicaoClick) {
        counter++;
        result.innerHTML = "Acertos: " + counter;
    }


    }

}
