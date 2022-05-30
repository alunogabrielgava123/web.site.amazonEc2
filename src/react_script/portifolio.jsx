'use strict';

const PAGINA_STATE = {
    GAMES: 0,
    ANDROID: 1,
    IOS: 2,
    SITE: 3,
    ESTUDOS: 4,
    DEMOS: 5
}


function Column(props) {

    const styleRow = {
        padding: props.size
    }

    return (
        <div className={props.name} style={styleRow}>
            {props.children}
        </div>
    );

}

function Header(props) {


    const styleHeader = {
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
        backgroundColor: "black",
    };


    const styleA = { textDecoration: "none", color: 'white' }

    return (
        <div style={styleHeader} >
            <ul style={{ display: 'flex' }}>
                <li style={{ padding: '20px' }}>  <p onClick={props.stateGames} style={styleA} href="">Games</p></li>
                <li style={{ padding: '20px' }}>  <p onClick={props.stateAndroid} style={styleA} href="">Android</p></li>
                <li style={{ padding: '20px' }}>  <p onClick={props.stateIos} style={styleA} href="">IOs</p></li>,
                <li style={{ padding: '20px' }}>  <p onClick={props.stateSite} style={styleA} href="">Sites</p></li>
                <li style={{ padding: '20px' }}>  <p onClick={props.stateStudos} style={styleA} href="">Estudos</p></li>
                <li style={{ padding: '20px' }}>  <p onClick={props.stateDemos} style={styleA} href="">Demos</p></li>
            </ul>
        </div>
    );
}

function Body(props) {

    return (
        <div className={props.name}>
            {props.children}
        </div>
    );
}



function Row(props) {

    const styleRow = {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: "20px",
    }

    return (
        <div className={props.name} style={styleRow}>
            {props.children}
        </div>
    );
}



function Card(props) {

    const styleCobrinhaImage = {
        height: '400px',
        width: '600px',
        borderRadius: '8px'
    }

    const cardStyle = {
        display: 'flex',
        width: '90%',
        height: '400px',
        backgroundColor: 'white',
        boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }

    const syleTitle = {
        padding: "20px",
        display: 'flex',
        alignItems: 'center'
    }

    const styleContente = {
        paddingLeft: '1em'
    }

    return (
        <div >
            <Column size='2em'>
                <Row>
                    <div style={cardStyle}>
                        <div>
                            <img src={props.image} style={styleCobrinhaImage} />
                        </div>
                        <div>
                            <div style={syleTitle} className="title-card">
                                <h1>
                                    {props.title}
                                </h1>
                                <h1 style={styleContente}>
                                    {props.snake}
                                </h1>
                            </div>
                            <div className='contente-card' style={styleContente}>
                                <h2 style={{ color: 'gray' }}>
                                    {props.descricao}
                                </h2>
                            </div>
                            <div className='footer-card' style={{ padding: '2em 0  0 1em' }}>
                                <a href={props.rota} style={{}}>
                                    {props.jogar}
                                </a>
                            </div>

                        </div>
                    </div>
                </Row>
            </Column>
        </div>
    );
}



function Main() {

    const [statePage, setStatePage] = React.useState(PAGINA_STATE.GAMES);

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
                return (
                    <div>
                        <Card title='Jogo da cobra'
                            descricao='Jogo desenvolvido em java Script puro, nesse jogo você deve comer a maça e evitar que a cobra toque sua propia calda! 😃'
                            snake='🐍'
                            jogar='Jogar agora'
                            image='/image/cobrinha-imagem.png'
                            rota='/portifolio/jogo-cobra'
                        />
                        <Card title='Bata na Luz'
                            descricao='Jogo desenvolvido em java Script puro, nesse jogo você deve bater onde a luz vermelha aparece e conquistar pontos!  😃'
                            snake='💡'
                            jogar='Jogar agora'
                            image='/image/minhoca-imagem.png'
                            rota='/portifolio/jogo-luz'
                        />
                    </div>
                )
            case 1:
                return (
                    <div>
                        Helo Android
                    </div>
                )
            case 2:
                return (
                    <div>
                        Helo IOs
                    </div>
                )
            case 3:
                return (
                    <div>
                        Helo Sites
                    </div>
                )
            case 4:
                return (
                    <div>
                        Helo Estudos
                    </div>
                )
            case 5:
                return (
                    <div>
                        Helo Demos
                    </div>
                )
            default:
                break;
        }
    }




    return (
        <Body name='body-container' >
            <Column name='column-container' size='0em'>
                <Header
                    stateGames={stateGameChange}
                    stateAndroid={stateAndroidChange}
                    stateIos={stateIosChange}
                    stateSite={stateSiteChange}
                    stateStudos={stateEstudosChange}
                    stateDemos={stateDemosChange}
                />
                { bodyChange(statePage) }
            </Column>
        </Body>
    );
}




function MyApp() {

    return (
        <React.Fragment>
            <Main />
        </React.Fragment>
    );

}




let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);


