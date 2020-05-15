import React, {Component} from "react"
import Person from "./Person/Person"

class Persons extends Component{

    render(){
        console.log("atualizou ")
        return(
          <div>
          {this.props.persons.map((onePerson, index) =>{
            return <Person
            name={onePerson.name}
            age={onePerson.age}
            click={()=>this.props.click(index)}
            key={onePerson.id}
            changed={event=>this.props.changed(event, onePerson.id)}/>
          })}
          </div>
      )
    }
}
export default Persons;
