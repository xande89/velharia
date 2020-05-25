import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends Component{

  componentDidMount(){
      //TODO: aqui entra o Ajax
  }  
  render() {
      return(
        <Nav variant="tabs" className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                 </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        );
    }
}
export default NavigationBar;
