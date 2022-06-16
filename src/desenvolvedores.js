'use strict';

function Divid(props) {

    //ISSO AQUI É CSS 
    var style = {
        height: props.size
    };
    return React.createElement(
        'div',
        { style: style },
        ' '
    );
}
function Row(props) {

    return React.createElement(
        'div',
        { className: props.name },
        props.children
    );
}

function Title(props) {

    var styleDive = {
        width: '100%'
    };

    var styleImage = {
        width: '100%',
        height: '300px'
        //backgroundSize: 'cover'
    };

    return React.createElement(
        'div',
        { style: styleDive },
        React.createElement('img', { src: '/image/luna-logo.png', style: styleImage }),
        React.createElement('a', null)
    );
}

function TitleProjeto(props) {

    var styleDive = {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    };

    var styleLunaticosImage = {
        width: '100%'
    };

    return React.createElement(
        'div',
        { style: styleDive },
        React.createElement('img', { src: '/image/lunaticos-att.png', style: styleLunaticosImage })
    );
}

function RowCard(props) {

    var styleRowCard = {
        display: props.display,
        justifyContent: 'center'
    };

    return React.createElement(
        'div',
        { style: styleRowCard, className: props.name },
        props.children
    );
}

function Column(props) {
    return React.createElement(
        'div',
        { className: 'container-contente', style: { backgroundColor: props.color } },
        props.children
    );
}

function FooterChield(props) {
    var style = {
        padding: '10em'
    };
    return React.createElement(
        'div',
        { className: 'foo-chield', style: style },
        props.children
    );
}

function Footer(props) {

    var footerStyle = {
        padding: "50px 50px 50px 50px",
        display: 'flex',
        background: '#71A300'
    };

    return React.createElement(
        'div',
        { className: 'foo', style: footerStyle },
        React.createElement(
            'div',
            { className: 'midias' },
            React.createElement(
                FooterChield,
                null,
                React.createElement(
                    'div',
                    null,
                    'FaceBook'
                ),
                React.createElement(
                    'div',
                    null,
                    'Instagram'
                ),
                React.createElement(
                    'div',
                    null,
                    'Twitter'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'contente-container' },
            React.createElement(
                FooterChield,
                null,
                React.createElement(
                    'div',
                    null,
                    'Projetos'
                ),
                React.createElement(
                    'div',
                    null,
                    'Portif\xF3divo'
                ),
                React.createElement(
                    'div',
                    null,
                    'Periodos'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'description' },
            React.createElement(
                FooterChield,
                null,
                'Vamos escrever ainda'
            )
        )
    );
}

function Card(props) {
    //Estilo Card
    var styleCard = {
        padding: ' 2em',
        width: '500px'
    };

    //Estilo Imagem
    var styleImage = {
        height: '350px',
        backgroundImage: 'url(\'/image/' + props.image + '\')',
        backgroundSize: 'cover'
    };

    //Estilo nome
    var styleName = {
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '34px',
        padding: ' 1em 1em 2em'
    };

    //Estilo Cargo
    var styleRole = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        color: 'gray',
        padding: ' 0em 1em 2em'
    };

    //Estilo botão
    var buttonGitHub = {
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'purple',
        color: 'white'
    };

    //Estilo linkdin
    var buttonLinkDin = {
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'blue',
        color: 'white'
    };

    return React.createElement(
        'div',
        { className: 'card-itens', style: styleCard },
        React.createElement('div', { className: 'image', style: styleImage }),
        React.createElement(
            'div',
            { className: 'name', style: styleName },
            props.name
        ),
        React.createElement(
            'div',
            { className: 'role', style: styleRole },
            props.role
        ),
        React.createElement(
            'a',
            { href: props.gitHub },
            React.createElement(
                'div',
                { className: 'button-Github', style: buttonGitHub },
                'Github'
            ),
            ' '
        ),
        React.createElement(Divid, { size: '10px' }),
        React.createElement(
            'a',
            { href: props.linkDin },
            React.createElement(
                'div',
                { className: 'button-linkdin', style: buttonLinkDin },
                'LinkDin'
            )
        )
    );
}

function Main() {

    return React.createElement(
        Column,
        { color: 'black' },
        React.createElement(
            Row,
            { name: 'row-header' },
            React.createElement(Title, { title: 'Luna Sofware' })
        ),
        React.createElement(
            Row,
            { name: 'row-quem-somos' },
            React.createElement(TitleProjeto, { name: 'Lunaticos' })
        ),
        React.createElement(
            RowCard,
            { display: 'flex', name: 'row-card' },
            React.createElement(Card, { image: 'eu-gava.jpeg', name: 'Gabriel Gava Pinheiro', role: 'Estudante de ciencia da computa\xE7\xE3o', gitHub: 'https://github.com/gabrielgavapinheiro', linkDin: '' }),
            React.createElement(Card, { image: 'yuki.jpeg', name: 'Rafael Yuki Tobaru', role: 'Estudante de ciencia da computa\xE7\xE3o', gitHub: 'https://github.com/Rafael-Yuki', linkDin: 'https://www.linkedin.com/in/rafael-yuki-tobaru-89997823b/' }),
            React.createElement(Card, { image: 'samuel.jpeg', name: 'Samuel Pereira Cunha', role: 'Estudante de ciencia da computa\xE7\xE3o', gitHub: 'https://github.com/sampcunha' }),
            React.createElement(Card, { image: 'vitor.jpeg', name: 'Vitor Leandro Machado', role: 'Estudante de ciencia da computa\xE7\xE3o', gitHub: 'https://github.com/Vitorlzlz' })
        ),
        React.createElement(Divid, { size: '10px' }),
        React.createElement(Footer, null)
    );
}

//Componente principal da minha aplicacao
function MyApp() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Main, null)
    );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyApp, null), domContainer);