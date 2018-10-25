import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      value: ''
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => {
        this.tick();
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
      }, 1000
    );

   
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div class='container'> 
        <div className="App vertical-center">
          <p> The Backend Says: </p>
          <h1> Hello  <span class='word'>{this.state.value}</span> </h1>
        </div>
      </div>
      
    );
  }
}

export default App;
