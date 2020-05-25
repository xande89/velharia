import React, {Component} from 'react';
import './Person.css'

class Person extends Component {
	constructor(props){
		console.log("Person.js - Constructor")
		super(props);

	}
	componentDidMount(){
		console.log("Person.js - componentDidMount")

	}


    render(){
		console.log("Person.js - render")
		return(
			<div className="Person">
			<h1 onClick={this.props.click}>{this.props.name}</h1>
			<p>My age is {this.props.age}</p>
			<input type="text"
				onChange={this.props.changed}
				defaultValue={this.props.name}

				key="i3" />
			</div>
		);
	}
}

export default Person;
