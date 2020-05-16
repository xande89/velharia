import React, {Component} from 'react';
import './Person.css'

class Person extends Component {
    render(){
		return(
			<div className="Person">
			<h1 onClick={this.props.click}>{this.props.name}</h1>
			<p>My age is {this.props.age}</p>
			<input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
			</div>
		);
	}
}
export default Person;
