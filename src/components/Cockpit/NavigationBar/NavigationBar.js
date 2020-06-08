import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {

    componentDidMount() {
        //TODO: aqui entra o Ajax
    }
    
    render() {

        const listaLinksMenu = this.props.listaLinksDisponiveis.map((umLink)=>{
            return (
                <Nav.Item key={umLink.key}>
                    <Link to={umLink.path} className="nav-link">{umLink.descricao}</Link>
                </Nav.Item>                
            )
        })
        return (
            <Nav variant="tabs" className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                {listaLinksMenu}
            </Nav>
        );
    }
}
export default NavigationBar;
