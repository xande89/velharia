import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends Component {

    componentDidMount() {
        //TODO: aqui entra o Ajax
    }
    
    render() {

        const listaLinksMenu = this.props.listaLinksDisponiveis.map((umLink)=>{
            return (
                <Nav.Item key={umLink.key}>
                    <Nav.Link eventKey={umLink.key}  onClick={(event)=>this.props.clicked(event,umLink.key)}>{umLink.descricao}</Nav.Link>
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
