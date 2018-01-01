import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider style={{ "justify-content": "center"}}>
          <Login />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
