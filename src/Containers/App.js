import React, {Component} from 'react';
<<<<<<< HEAD:src/Containers/App.js
import logo from '../logo.svg';
=======
import logo from './logo.svg';
import Radium from 'radium';
>>>>>>> e3eed8b1832b7bdc1897e5419b80d37c4596d4ea:src/App.js
import './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

class App extends Component {

<<<<<<< HEAD:src/Containers/App.js
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
=======
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
	namechangedHandler = (event, pKey) => {
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
>>>>>>> e3eed8b1832b7bdc1897e5419b80d37c4596d4ea:src/App.js

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
		const style ={
			backgroundColor:'#005500'
		}
        const headerStile ={
            color: '#00f',
            ':hover':{
                color: '#0f0'
            }
        }
		let persons = null;
		if(this.state.showPersons){
			persons=(
				<div>
				{this.state.persons.map((onePerson, index) => {
      				return <Person
      				name={onePerson.name}
      				age={onePerson.age}
      				click={()=>this.deletePersonHandler(index)}
      				key={onePerson.id}
      				changed={(event)=>this.namechangedHandler(event, onePerson.id)}/>
				})}
				</div>
			);
		}
		return (
			<div className="App">
            <h1 style={headerStile}>Meu app React com os exercicios</h1>
				<button style={style} onClick={this.switchNameHandler.bind(this, "alexandre!!!")}>troca usando bind</button>
				<button onClick={() => this.switchNameHandler("alexandre2!!!")}>troca usando arrow function</button>
				<button onClick={this.togglePersonHandler}> toggle person</button>
				{/*<button onClick={switchNameHandler}>troca</button>*/}
				{persons}

<<<<<<< HEAD:src/Containers/App.js

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
=======
			</div>
		);
	}
>>>>>>> e3eed8b1832b7bdc1897e5419b80d37c4596d4ea:src/App.js
}

export default Radium(App);
