'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var PAGINA_STATE = {
    GAMES: 0,
    ANDROID: 1,
    IOS: 2,
    SITE: 3,
    ESTUDOS: 4,
    DEMOS: 5
};

function Column(props) {

    var styleRow = {
        padding: props.size
    };

    return React.createElement(
        "div",
        { className: props.name, style: styleRow },
        props.children
    );
}

function Header(props) {

    var styleHeader = {
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
        backgroundColor: "black"
    };

    var styleA = { textDecoration: "none", color: 'white' };

    return React.createElement(
        "div",
        { style: styleHeader },
        React.createElement(
            "ul",
            { style: { display: 'flex' } },
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateGames, style: styleA, href: "" },
                    "Games"
                )
            ),
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateAndroid, style: styleA, href: "" },
                    "Android"
                )
            ),
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateIos, style: styleA, href: "" },
                    "IOs"
                )
            ),
            ",",
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateSite, style: styleA, href: "" },
                    "Sites"
                )
            ),
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateStudos, style: styleA, href: "" },
                    "Estudos"
                )
            ),
            React.createElement(
                "li",
                { style: { padding: '20px' } },
                "  ",
                React.createElement(
                    "p",
                    { onClick: props.stateDemos, style: styleA, href: "" },
                    "Demos"
                )
            )
        )
    );
}

function Body(props) {

    return React.createElement(
        "div",
        { className: props.name },
        props.children
    );
}

function Row(props) {

    var styleRow = {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: "20px"
    };

    return React.createElement(
        "div",
        { className: props.name, style: styleRow },
        props.children
    );
}

function Card(props) {

    var styleCobrinhaImage = {
        height: '400px',
        width: '600px',
        borderRadius: '8px'
    };

    var cardStyle = {
        display: 'flex',
        width: '90%',
        height: '400px',
        backgroundColor: 'white',
        boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    var syleTitle = {
        padding: "20px",
        display: 'flex',
        alignItems: 'center'
    };

    var styleContente = {
        paddingLeft: '1em'
    };

    return React.createElement(
        "div",
        null,
        React.createElement(
            Column,
            { size: "2em" },
            React.createElement(
                Row,
                null,
                React.createElement(
                    "div",
                    { style: cardStyle },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("img", { src: props.image, style: styleCobrinhaImage })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { style: syleTitle, className: "title-card" },
                            React.createElement(
                                "h1",
                                null,
                                props.title
                            ),
                            React.createElement(
                                "h1",
                                { style: styleContente },
                                props.snake
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "contente-card", style: styleContente },
                            React.createElement(
                                "h2",
                                { style: { color: 'gray' } },
                                props.descricao
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "footer-card", style: { padding: '2em 0  0 1em' } },
                            React.createElement(
                                "a",
                                { href: props.rota, style: {} },
                                props.jogar
                            )
                        )
                    )
                )
            )
        )
    );
}

function Main() {
    var _React$useState = React.useState(PAGINA_STATE.GAMES),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        statePage = _React$useState2[0],
        setStatePage = _React$useState2[1];

    function stateGameChange() {
        setStatePage(PAGINA_STATE.GAMES);
    }
    function stateAndroidChange() {
        setStatePage(PAGINA_STATE.ANDROID);
    }
    function stateIosChange() {
        setStatePage(PAGINA_STATE.IOS);
    }
    function stateSiteChange() {
        setStatePage(PAGINA_STATE.SITE);
    }
    function stateEstudosChange() {
        setStatePage(PAGINA_STATE.ESTUDOS);
    }
    function stateDemosChange() {
        setStatePage(PAGINA_STATE.DEMOS);
    }

    function bodyChange(statePage) {
        switch (statePage) {
            case 0:
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Card, { title: "Jogo da cobra",
                        descricao: "Jogo desenvolvido em java Script puro, nesse jogo voc\xEA deve comer a ma\xE7a e evitar que a cobra toque sua propia calda! \uD83D\uDE03",
                        snake: "\uD83D\uDC0D",
                        jogar: "Jogar agora",
                        image: "/image/cobrinha-imagem.png",
                        rota: "/portifolio/jogo-cobra"
                    }),
                    React.createElement(Card, { title: "Bata na Luz",
                        descricao: "Jogo desenvolvido em java Script puro, nesse jogo voc\xEA deve bater onde a luz vermelha aparece e conquistar pontos!  \uD83D\uDE03",
                        snake: "\uD83D\uDCA1",
                        jogar: "Jogar agora",
                        image: "/image/minhoca-imagem.png",
                        rota: "/portifolio/jogo-luz"
                    })
                );
            case 1:
                return React.createElement(
                    "div",
                    null,
                    "Helo Android"
                );
            case 2:
                return React.createElement(
                    "div",
                    null,
                    "Helo IOs"
                );
            case 3:
                return React.createElement(
                    "div",
                    null,
                    "Helo Sites"
                );
            case 4:
                return React.createElement(
                    "div",
                    null,
                    "Helo Estudos"
                );
            case 5:
                return React.createElement(
                    "div",
                    null,
                    "Helo Demos"
                );
            default:
                break;
        }
    }

    return React.createElement(
        Body,
        { name: "body-container" },
        React.createElement(
            Column,
            { name: "column-container", size: "0em" },
            React.createElement(Header, {
                stateGames: stateGameChange,
                stateAndroid: stateAndroidChange,
                stateIos: stateIosChange,
                stateSite: stateSiteChange,
                stateStudos: stateEstudosChange,
                stateDemos: stateDemosChange
            }),
            bodyChange(statePage)
        )
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