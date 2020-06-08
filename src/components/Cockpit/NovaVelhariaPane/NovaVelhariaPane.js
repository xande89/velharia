import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./NovaVelhariaPane.css"

class NovaVelhariaPane extends Component {
    render() {
        return (
            <div className="NovaVelhariaPane">
                <Form>
                    <h1>Passo 1</h1>
                    <p>
                        - Mande-nos uma foto do seu item. Nós tentaremos descobrir algo sobre ele sozinhos.
                    </p>
                    <Form.Group controlId="fgFile">
                        <Form.File
                            id="arquivo"
                            label="Cadastre sua velharia aqui"
                            data-browse="Pronto!"
                            custom
                        />
                    </Form.Group>
                    <h1>Passo 2</h1>
                    <p>
                        - Complete as informações que não estão preenchidas
                    </p>
                    <Form.Group controlId="fgDadosComplementares">
                        <Form.Control size="lg" type="text" placeholder="O que é" />
                        
                        <Form.Control size="lg" type="text" placeholder="Qual é a marca" />

                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contenos mais sobre o item</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Finalizar
                    </Button>
                </Form>

            </div>
        )
    }
}

export default NovaVelhariaPane;