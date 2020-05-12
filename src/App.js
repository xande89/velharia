import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name:"Alexandre", age:31},
      {name:"michelle", age:41},
      {name:"Yasmimi", age:11}
    ],
    showPersons: false
  }
  /// handlers###############################################################
   switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName, age:51},
        {name:"michelle", age:416},
        {name:"Yasmimi", age:151},
      ]
    });
  };
   namechangedHandler = (event) =>{
    this.setState({
      persons:[
        {name:"alexandre", age:51},
        {name:event.target.value, age:416},
        {name:"Yasmimi", age:151},
      ]
    });
  }



   togglePersonHandler = () =>{
    console.log("clicked")
    let doesShowPerson = this.state.showPersons;
    //continuar daqui
    this.setState({showPersons : !doesShowPerson});
  }
  render () {

  const  style ={
      backgroundColor:'#005500'
    }

  let  person = null;


    if(this.state.showPersons){
      person=(
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.namechangedHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <button style={style} onClick={this.switchNameHandler.bind(this, "alexandre!!!")}>troca usando bind</button><br/>
        <button onClick={() => this.switchNameHandler("alexandre2!!!")}>troca usando arrow function</button><br/>
        <button onClick={this.togglePersonHandler}> toggle person</button>
        {/*<button onClick={switchNameHandler}>troca</button>*/}
        {person}

      </div>
    );
  }
}

export default App;
