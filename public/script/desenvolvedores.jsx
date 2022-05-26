'use strict';


function Divid(props) {

    //ISSO AQUI É CSS 
    const style = {
        height: props.size
    }


    return (
        <div style={style}  > </div>
    );

}


function Row(props) {

    return (
        <div className={props.name}>
            {props.children}
        </div>
    );
}

function Title(props) {

    const styleDive = {
        width: '100%',
    }

    const styleImage = {
        width: '100%',
        height: '300px',
        //backgroundSize: 'cover'
    };

    return (
        <div style={styleDive} >
            <img src='/image/luna-logo.png' style={styleImage} />
            <a></a>
        </div>
    );
}

function TitleProjeto(props) {

    const styleDive = {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }

    const styleLunaticosImage = {
        width: '100%'
    }

    return (
        <div style={styleDive} >
            <img src='/image/lunaticos-att.png' style={styleLunaticosImage} />
        </div>
    );
}

function RowCard(props) {

    const styleRowCard = {
        display: props.display,
        justifyContent: 'center',
    }

    return (
        <div style={styleRowCard} className={props.name} >
            {props.children}
        </div>
    );

}

function Column(props) {

    return (
        <div className='container-contente' >
            {props.children}
        </div>
    );

}


function FooterChield(props) {

    const style = {
        padding: '10em'
    }

    return (
        <div className='foo-chield' style={style}>
            {props.children}
        </div>
    );
}

function Footer(props) {

    const footerStyle = {
        padding: "50px 50px 50px 50px",
        display: 'flex',
        background : '#71A300'
    }


    return (
        <div className='foo' style={footerStyle}>
            <div className='midias'>
                <FooterChield >
                    <div>FaceBook</div>
                    <div>Instagram</div>
                    <div>Twitter</div>
                </FooterChield>
            </div>
            <div className='contente-container'>
                <FooterChield>
                    <div>Projetos</div>
                    <div>Portifódivo</div>
                    <div>Periodos</div>
                </FooterChield>
            </div>
            <div className='description'>
                <FooterChield>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </FooterChield>
            </div>
        </div>
    );
}


function Card(props) {


    //Estilo Card
    const styleCard = {
        padding: ' 2em',
        width: '500px',
    };

    //Estilo Imagem
    const styleImage = {
        height: '350px',
        backgroundImage: `url('/image/${props.image}')`,
        backgroundSize: 'cover'
    };

    //Estilo nome
    const styleName = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        padding: ' 1em 1em 2em'
    };

    //Estilo Cargo
    const styleRole = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        color: 'gray',
        padding: ' 0em 1em 2em'
    };

    //Estilo botão
    const buttonGitHub = {
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        color: 'white'
    };

    //Estilo linkdin
    const buttonLinkDin = {
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'blue',
        color: 'white',
    };

    return (
        <div className='card-itens' style={styleCard} >
            <div className='image' style={styleImage}  >
            </div>
            <div className='name' style={styleName} >
                {props.name}
            </div>
            <div className='role' style={styleRole} >
                {props.role}
            </div>
            <a href={props.gitHub} >
                <div className='button-Github' style={buttonGitHub} >
                    Github
                </div> </a>
            <Divid size='10px' />
            <a href={props.linkDin}>
                <div className='button-linkdin' style={buttonLinkDin} >
                    LinkDin
                </div>
            </a>
        </div>
    );
}

function Main() {

    return (
        <Column>
            <Row name="row-header" >
                <Title title="Luna Sofware" />
            </Row>
            <Divid size='10px' />
            <Row name="row-quem-somos" >
                <TitleProjeto name='Lunaticos' />
            </Row>
            <RowCard display='flex' name='row-card' >
                <Card image='eu-gava.jpeg' name='Gabriel Gava Pinheiro' role='Estudante de ciencia da computação' gitHub='https://github.com/gabrielgavapinheiro' linkDin='' />
                <Card image='yuki.jpeg' name='Rafael Yuki Tobaru' role='Estudante de ciencia da computação' gitHub='https://github.com/Rafael-Yuki' linkDin='https://www.linkedin.com/in/rafael-yuki-tobaru-89997823b/' />
                <Card image='samuel.jpeg' name='Samuel Pereira Cunha' role='Estudante de ciencia da computação' gitHub='https://github.com/sampcunha' />
                <Card image='vitor.jpeg' name='Vitor Leandro Machado' role='Estudante de ciencia da computação' gitHub='https://github.com/Vitorlzlz' />
            </RowCard>
            <Divid size='10px' />
            <Footer />
        </Column>

    );

}



//Componente principal da minha aplicacao
function MyApp() {

    return (
        <React.Fragment >
            <Main />
        </React.Fragment>
    );

}




let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);