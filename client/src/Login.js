import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
import TechCrunch from './TechCrunch.js'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  handleClick = () => {
    this.setState({ login : true })
  }

  render() {
    const style = {
      margin: 12,
    };
    return this.state.login ? <TechCrunch/> : (
      <div>
      <center>
      <Card style={{"width":"40%"}}>
        <h1>Techcrunch Login</h1>
        <div>
          <TextField
            hintText="email@email.com"
          /><br />
          <br />
          <TextField
            hintText="password"
          /><br />
          <br />
          <RaisedButton label="Login" style={style} onClick={this.handleClick}/>
        </div>
        </Card>
        </center>
        </div>
      )
  }
}

export default Login;
