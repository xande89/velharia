import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar'
import CardsPane from './CardsPane/CardsPane'
    const opcoesMenu=[
        {descricao:"Cadastre sua Velharia", key:"link-1" },
        {descricao:"Minha conta", key:"link-2" },
        {descricao:"Minha fdsfdsfs conta", key:"link-4" }
    ]
class Cockpit extends Component {
    
    componentDidMount() {
        //TODO: aqui entra o Ajax
    }
    navBarClickedHandler =(event,key)=>{
        console.log(key)
        
        opcoesMenu[0].descricao="dsfsf"
        console.log(opcoesMenu[0].descricao)
    }
    render() {
        
        return (
            <React.Fragment>
                <NavigationBar listaLinksDisponiveis={opcoesMenu} clicked={this.navBarClickedHandler}></NavigationBar>
                <CardsPane></CardsPane>
            </React.Fragment>
        );
    }
}
export default Cockpit;
