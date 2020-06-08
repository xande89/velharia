import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar'
import CardsPane from './CardsPane/CardsPane'
import { Route} from 'react-router-dom';
import NovaVelhariaPane from './NovaVelhariaPane/NovaVelhariaPane';
import { BrowserRouter } from 'react-router-dom';
import ComoFuncionaPane from './ComoFuncionaPane/ComoFuncionaPane';

const opcoesMenu=[
    {descricao:"Cadastre sua Velharia", key:"link-1", path: "/cadastrarVelharia" },
    {descricao:"Minha conta", key:"link-2", path:"/minha-conta" },
    {descricao:"Como Funciona?", key:"link-3", path:"/como-funciona" }
]
class Cockpit extends Component {
    
    componentDidMount() {
        //TODO: aqui entra o Ajax
    }
    navBarClickedHandler =(event,key)=>{
        console.log(key)
        
        // opcoesMenu[0].descricao="dsfsf"
        // console.log(opcoesMenu[0].descricao)
    }
    render() {
        
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavigationBar listaLinksDisponiveis={opcoesMenu} clicked={this.navBarClickedHandler}></NavigationBar>
                    <Route path="/home" exact component={CardsPane} />
                    <Route path="/cadastrarVelharia" exact component={NovaVelhariaPane} />
                    <Route path="/como-funciona" exact component={ComoFuncionaPane} />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default Cockpit;
