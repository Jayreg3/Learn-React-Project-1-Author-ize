//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component{
  state = {
    text: "Anonymous"
  };

  textChangeHandler = (event) => {
    this.setState(
      { text: event.target.value }
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Author.ize</h1>
          <h6>Write any name in the text box to designate that person as the author of these quotes</h6>
          <UserInput text={this.state.text} userTyped={this.textChangeHandler}/>
          <UserOutput paragraph1='All that glitters is not gold'
          paragraph2='Fair is foul, and foul is fair: Hover through the fog and filthy air.'
          author={this.state.text}>
          </UserOutput>
          <UserOutput paragraph1='As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.'
          paragraph2='You are free, and that is why you are lost.'
          author={this.state.text}>
          </UserOutput>
        </header>
      </div>
    );
  }
}

export default App;
