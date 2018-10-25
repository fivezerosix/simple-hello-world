import React, { Component } from 'react';
import './App.css';

class App extends Component {


  state = { value: '',  seconds: 0 };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }


  componentDidMount () {
    fetch('/hello', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => {
      return response.json() 
    })
    .then((response => {
      this.setState(response)
    }));
    
    this.interval = setInterval(this.tick.bind(this),1000);
  }

  render() {
    return (
      <div className="App">
        <p> The Backend Says: </p>
        <h1> Hello {this.state.value} </h1>
      </div>
    );
  }
}

export default App;
