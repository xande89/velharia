import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import "./CardVelharia.css";

class CardVelharia extends Component {
  render() {
    return (<Card style={{ width: '18rem' }} className="m-2 CardVelharia">
      <Card.Img variant="top" src={this.props.img + "holder.js/100px180"} />
      <Card.Body>
        <Card.Title>{this.props.titulo}</Card.Title>
        <Card.Text>
          {this.props.descricao}</Card.Text>
        <Button variant="primary" onClick={this.props.clicked}>Ver</Button>
      </Card.Body>
    </Card>);
  }
}
export default CardVelharia;