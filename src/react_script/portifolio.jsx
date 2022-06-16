'use strict';

const PAGINA_STATE = {
    GAMES: 0,
    ANDROID: 1,
    IOS: 2,
    SITE: 3,
    ESTUDOS: 4,
    DEMOS: 5
}

//Funcao construtora de elementos
function HeaderElementes(title, isCheck, callBack) {

    return {
        title: title,
        isCheck: isCheck,
        callBack: callBack
    }

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


    // const styleA = { textDecoration: "none", color: 'red' }

    return (
        <div style={styleHeader} >
            <ul style={{ display: 'flex' }}>
                {props.lista.map((e ,index) => (
                    <li key={index} style={{ padding: '20px' }}>  <p onClick={e.callBack} style={{ cursor:'pointer', textDecoration: "none", color: e.isCheck ? 'purple' : 'white' , fontSize : '28px'}} >{e.title}</p></li>
                ))}
            </ul>
        </div>
    );
}

{/* <li style={{ padding: '20px' }}>  <p onClick={props.stateGames} style={styleA} href="">Games</p></li>
<li style={{ padding: '20px' }}>  <p onClick={props.stateAndroid} style={styleA} href="">Android</p></li>
<li style={{ padding: '20px' }}>  <p onClick={props.stateIos} style={styleA} href="">IOs</p></li>,
<li style={{ padding: '20px' }}>  <p onClick={props.stateSite} style={styleA} href="">Sites</p></li>
<li style={{ padding: '20px' }}>  <p onClick={props.stateStudos} style={styleA} href="">Estudos</p></li>
<li style={{ padding: '20px' }}>  <p onClick={props.stateDemos} style={styleA} href="">Demos</p></li> */}

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
    const [stateIsCheck, setStateIsCheck] = React.useState([true, false, false, false]);



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

    const elementos = [
        HeaderElementes('Game', stateIsCheck[0], () => {
            setStatePage(PAGINA_STATE.GAMES);
            if (!stateIsCheck[0]) {
                const newState = [];
                newState[0] = true;
                newState[1] = false;
                newState[2] = false;
                newState[3] = false;
                setStateIsCheck(newState);
            }
        }),
        HeaderElementes('Estudos', stateIsCheck[1], () => {
            setStatePage(PAGINA_STATE.ESTUDOS);
            if (!stateIsCheck[1]) {
                const newState = [];
                newState[0] = false;
                newState[1] = true;
                newState[2] = false;
                newState[3] = false;
                setStateIsCheck(newState);
            }
        }),
        HeaderElementes('Android', stateIsCheck[2], () => {
            setStatePage(PAGINA_STATE.ANDROID);
            if (!stateIsCheck[2]) {
                const newState = [];
                newState[0] = false;
                newState[1] = false
                newState[2] = true;
                newState[3] = false;
                setStateIsCheck(newState);
            }
        }),
        HeaderElementes('IOs', stateIsCheck[3], () => {
            setStatePage(PAGINA_STATE.IOS);
            if (!stateIsCheck[3]) {
                const newState = [];
                newState[0] = false;
                newState[1] = false;
                newState[2] = false;
                newState[3] = true;
                setStateIsCheck(newState);
            }
        }),
    ]



    return (
        <Body name='body-container' >
            <Column name='column-container' size='0em'>
                <Header lista={elementos} />
                {bodyChange(statePage)}
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


