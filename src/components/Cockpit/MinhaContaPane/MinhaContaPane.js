import React, { Component } from 'react';
import './MinhaContaPane.css';
import {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Form, Button } from 'react-bootstrap'
import minhaImagem from '../../../assets/images/Alexandre.jpg'

class MinhaContaPane extends Component {
    render() {
        return (<div className="MinhaContaPane">
                <Image src={minhaImagem} roundedCircle />
            <h1>
                Minha conta
            </h1>
             <Form>
                <Form.Group controlId="fgDadosPessoais">
                    <Form.Control size="lg" type="text" placeholder="Nome" />
                    <Form.Control size="lg" type="text" placeholder="Email" />

                </Form.Group>
                <Form.Group controlId="fgDadosPessoais">
                    <Form.Control size="lg" type="password" placeholder="Senha" />
                    <Form.Control size="lg" type="password" placeholder="Senha Novamente" />
                    
                </Form.Group>
                </Form>
        </div>)
    }
}
export default MinhaContaPane;