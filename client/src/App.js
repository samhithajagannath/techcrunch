import React, { Component } from 'react';
import './App.css';
import TechCrunch from './TechCrunch.js'
import Login from './Login.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
