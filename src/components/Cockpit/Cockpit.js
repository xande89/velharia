import React, {Component} from 'react';
import NavigationBar from './NavigationBar/NavigationBar'
import CardsPane from './CardsPane/CardsPane'
class Cockpit extends Component{

  componentDidMount(){
      //TODO: aqui entra o Ajax
  }  
  render() {
      return(
        <React.Fragment>
            <NavigationBar></NavigationBar>
            <CardsPane></CardsPane>
        </React.Fragment>
        );
    }
}
export default Cockpit;
