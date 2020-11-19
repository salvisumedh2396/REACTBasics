import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { Component } from 'react';

class App extends Component {

  state = {
    userName: 'Stuart'
  }

  inputHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <UserInput inputTrigger = {this.inputHandler} value={this.state.userName}/>
        <UserOutput userName = {this.state.userName}/>
        <UserOutput userName = 'Leonard'/>
      </div>
    );
  }
}

export default App;
