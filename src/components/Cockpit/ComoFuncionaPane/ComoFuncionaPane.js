import React, {Component} from 'react';
import './ComoFuncionaPane.css'
class ComoFuncionaPane extends Component {
    render(){
        return(<div className="ComoFuncionaPane">
            <h1>Como Funciona?</h1>
            <h2>Passo 1 - Crie sua conta e informe seus dados de contato</h2>
                <p>Cadastre-se para poder cadastrar ou demonstrar interesse em itens que você viu.</p>
            <h2>Passo 2 - Cadastre sua velharia</h2>
                <p>Sua velharia pode ser um tesouro para alguem. tire uma foto de um item bem antigo que voce tem em casa. Se voce não tem ideia se algo tem valor, vou te dar alguns exemplos:
                    garrafas, latas e potes com rótulos antigos.
                    Placas antigas, etc.
                    publique no site e pronto.
        
                </p>
            <h2>Passo 3 - Esperem achar o seu tesouro</h2>
            <p>
                Um dia alguem pode se interessar por sua velharia. Quando isso acontecer, 
                nós vamos avisar voce que há um potencial comprador para o seu item. 
                <br/>
                Você poderá iniciar uma negociação com o interessado através da nossa plataforma. Caso cheguem a um acordo, nós cuidaremos do resto para você!
            </p>
            </div>);
    }
}
export default ComoFuncionaPane;