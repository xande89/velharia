import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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
    
	const personIndex = persons.findIndex(p=>{
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

  const  style ={
      backgroundColor:'#005500'
  }

  let  persons = null;


  if(this.state.showPersons){
      persons=(
        <div>
        {this.state.persons.map((onePerson, index) =>{
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
        <button style={style} onClick={this.switchNameHandler.bind(this, "alexandre!!!")}>troca usando bind</button><br/>
        <button onClick={() => this.switchNameHandler("alexandre2!!!")}>troca usando arrow function</button><br/>
        <button onClick={this.togglePersonHandler}> toggle person</button>
        {/*<button onClick={switchNameHandler}>troca</button>*/}
        {persons}

      </div>
    );
  }
}

export default App;
