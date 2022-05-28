'use strict';

function Column(props) {

    return React.createElement(
        'div',
        { style: { padding: '1em' } },
        props.children
    );
}

function Main() {
    React.createElement(
        Column,
        null,
        React.createElement(Heafer, null)
    );
}

function MyApp() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Main, null)
    );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyApp, null), domContainer);