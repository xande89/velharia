import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar'
import CardsPane from './CardsPane/CardsPane'
import { Route} from 'react-router-dom';
import NovaVelhariaPane from './NovaVelhariaPane/NovaVelhariaPane';
import { BrowserRouter } from 'react-router-dom';
import ComoFuncionaPane from './ComoFuncionaPane/ComoFuncionaPane';
import MinhaContaPane from './MinhaContaPane/MinhaContaPane'
const opcoesMenu=[
    {descricao:"Home", key:"link-0", path:"/home", component: CardsPane },
    {descricao:"Cadastre sua Velharia", key:"link-1", path: "/cadastrarVelharia", component:NovaVelhariaPane },
    {descricao:"Minha conta", key:"link-2", path:"/minha-conta", component: MinhaContaPane },
    {descricao:"Como Funciona?", key:"link-3", path:"/como-funciona", component: ComoFuncionaPane}
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
        
        const menusRoute = opcoesMenu.map((umOpcaoMenu, index)=>{
            return <Route path={umOpcaoMenu.path} exact key={umOpcaoMenu.key} component={umOpcaoMenu.component} />
        })
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavigationBar listaLinksDisponiveis={opcoesMenu} clicked={this.navBarClickedHandler}></NavigationBar>
                    {menusRoute}
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default Cockpit;
