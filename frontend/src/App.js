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
          fetch( 'http://'+window.location.hostname+':3001/hello', {
          headers : { 
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
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
