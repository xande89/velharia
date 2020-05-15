import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

class App extends Component {

  state = {
    persons:[
      {id:'a', name:"Alexandre", age:31},
      {id:'b', name:"michelle", age:41},
      {id:'c', name:"Yasmimi", age:11}
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
  namechangedHandler = (event, pKey) =>{

      const personIndex = this.state.persons.findIndex(p=>{
		return p.id===pKey;
	});

	const chdPerson = {...this.state.persons[personIndex]};

	chdPerson.name=event.target.value;

	const persons = [...this.state.persons];

	persons[personIndex]= chdPerson;

	this.setState({
      persons:persons
    });
  }



   togglePersonHandler = () =>{
    console.log("clicked")
    let doesShowPerson = this.state.showPersons;
    //continuar daqui
    this.setState({showPersons : !doesShowPerson});
  }
  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  render () {

  const  buttonStyle ={
      backgroundColor:'#005500'
  }

  let  persons = null;


  if(this.state.showPersons){
      persons=(<Persons
          persons={this.state.persons}
			click={this.deletePersonHandler}
			changed={this.namechangedHandler}/>
      );
  }
  return (
      <div className="App">
        <Cockpit
            style={buttonStyle}
            namechange={() => this.switchNameHandler("alexandre2!!!")}
            toggleperson={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
