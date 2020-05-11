import React from 'react';
import './Person.css'
const person = (props) => {
  return(
    <div className="Person">
      <h1 onClick={props.click}>{props.name}</h1>
      <p>My age is {props.age}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name}/>
    </div>
  );
}
export default person;
