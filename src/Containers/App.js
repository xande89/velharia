import React, {Component} from 'react';
//import logo from '../logo.svg';
import LoginPane from "../components/LoginPane/LoginPane";
import './App.css';
import {authContext} from '../contexts/app-context';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		isAuthenticated: true
    };
    static contextType = authContext;

    componentDidUpdate(prevProps, prevState){
        console.log("App.js-ComponentDIdUpdate:");
    }
    doLogin = (event)=>{
        event.preventDefault();
        this.context.isAuthenticated = true;
        console.log(this.context.isAuthenticated);
        this.setState({isAuthenticated:this.context.isAuthenticated})
    }
    render(){
        console.log("App.js "+this.context.isAuthenticated)
        return (
            <React.Fragment>
                <header className="App_Header">
                    Velharia
                </header>
                <div className="App_Content container">
                    {!this.context.isAuthenticated?
                    <LoginPane doLogin={this.doLogin}></LoginPane>
                    :<Cockpit/>}
                </div>
            </React.Fragment>
        )
    }
  
}

export default App;

