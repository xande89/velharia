import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



const app =(props) => {

  const [initState, chState] = useState({
    persons:[
      {name:"Alexandre", age:31},
      {name:"michelle", age:41},
      {name:"Yasmimi", age:11},
    ]
  });
  const switchNameHandler = (newName) =>{
    chState({
      persons:[
        {name:newName, age:51},
        {name:"michelle", age:416},
        {name:"Yasmimi", age:151},
      ],
      showPersons: false
    });
  };
  const namechangedHandler = (event) =>{
    chState({
      persons:[
        {name:"alexandre", age:51},
        {name:event.target.value, age:416},
        {name:"Yasmimi", age:151},
      ]
    });
  }
  const [anotheerState, chAnotherState] = useState("outro estado")

  const style ={
    backgroundColor:'#005500'
  }

  let person = null;

  console.log(initState.showpersons)
  if(initState.showPersons){
    person=(
      <div>
      <Person
        name={initState.persons[0].name}
        age={initState.persons[0].age} />
      <Person
        name={initState.persons[1].name}
        age={initState.persons[1].age}
        click={switchNameHandler}
        changed={namechangedHandler}/>
      <Person
        name={initState.persons[2].name}
        age={initState.persons[2].age} />
      </div>
    )
  }

  const togglePersonHandler = () =>{
    console.log("clicked")
    let showperson = initState.showPersons;
     setState({showPersons : !showperson});
  }

  return (
    <div className="App">
      <button style={style} onClick={switchNameHandler.bind(this, "alexandre!!!")}>troca usando bind</button><br/>
      <button onClick={() => switchNameHandler("alexandre2!!!")}>troca usando arrow function</button><br/>
      <button onClick={togglePersonHandler}> toggle person</button>
      {/*<button onClick={switchNameHandler}>troca</button>*/}
      {person}

    </div>
  );
}

export default app;
