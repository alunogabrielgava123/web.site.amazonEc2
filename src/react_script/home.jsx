'use strict';

function MyApp(){
    return <h1>Elemento React</h1>
}


let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);