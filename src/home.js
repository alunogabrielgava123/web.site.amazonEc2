'use strict';

function MyApp() {
    return React.createElement(
        'h1',
        null,
        'Elemento React'
    );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyApp, null), domContainer);