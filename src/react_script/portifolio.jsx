'use strict';






function Column(props){
    
     

    return(
        <div style={{ padding : '1em' }}>
            {props.children}
        </div>
    ); 

}



function Main() {
    <Column>
         <Heafer />
    </Column>
}




function MyApp(){

    return (
       <React.Fragment>
           <Main />
       </React.Fragment>
    );

}




let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);


