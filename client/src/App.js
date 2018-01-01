import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TechCrunch from './TechCrunch.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider style={{ "justify-content": "center"}}>
          <TechCrunch username="jackfranklin"></TechCrunch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
