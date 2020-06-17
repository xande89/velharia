import React, { Component } from 'react';
import CardVelharia from './CardVelharia/CardVelharia'

class CardsPane extends Component {

    state = {
        listaVelharias:
        [
            
            {id:"asda",titulo:"Velharia1",img:"/imgv1", descricao:"descricao velharia 1"},
            {id:"dsf",titulo:"Velharia2",img:"/img/v2", descricao:"descricao velharia 2"},
            {id:"asdfsfda",titulo:"Velharia 3",img:"/img/v3", descricao:"descricao velharia 3"},
            {id:"asdfsfsdfda",titulo:"Velharia 4",img:"/img/v4", descricao:"descricao velharia 3"},
            {id:"asdfsffsdqda",titulo:"Velharia 5",img:"/img/v5", descricao:"descricao velharia 3"}
            
        ]
    }
    componentDidMount(){

    }
    clickedCardHandler(event, targetId){
        console.log("clicou no item "+ targetId);
    }
    render() {
        // itera a lista de card oriundas do servidor
        const listaCards = this.state.listaVelharias.map((umaVelharia)=>{
            return (<CardVelharia 
                key={umaVelharia.id} 
                descricao={umaVelharia.descricao}
                titulo={umaVelharia.titulo}
                img={umaVelharia.img}
                clicked={(event)=>this.clickedCardHandler(event, umaVelharia.id)}
                />)
        })

    return (<div>{listaCards}</div>);
    }
}
export default CardsPane;