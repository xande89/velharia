import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {

    componentDidMount() {
        //TODO: aqui entra o Ajax
    }
    
    render() {

        const listaLinksMenu = this.props.listaLinksDisponiveis.map((umLink)=>{
            return (
                <Nav.Item key={umLink.key}>
                    <NavLink to={umLink.path} className="nav-link">{umLink.descricao}</NavLink>
                </Nav.Item>                
            )
        })
        return (
            <Nav variant="tabs" className="justify-content-center NavigationBar" activeKey="/home">
                {listaLinksMenu}
            </Nav>
        );
    }
}
export default NavigationBar;
