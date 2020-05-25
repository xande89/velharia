import React, {Component} from 'react';

class Cockpit extends Component{

  componentDidMount(){
      
  }  
  render() {
      return(
          <div>
              <button style={this.props.style} onClick={this.props.namechange}>troca usando bind</button><br/>
              <button onClick={this.props.namechange}>troca usando arrow function</button><br/>
              <button onClick={this.props.toggleperson}> toggle person</button>

          </div>
        );
    }
}
export default Cockpit;
