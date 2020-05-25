import React , { Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import "./LoginPane.css";

class LoginPane extends Component{

    render(){
        return(
        <div className="LoginPane">
            <Form onSubmit={(event)=>{this.props.doLogin(event)}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Seu e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Seu e-mail" />
                    <Form.Text className="text-muted">
                    Nós não vamos compartilhar seu e-mail com ninguem
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Manter-me logado" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </div>);
    }
}
export default LoginPane;