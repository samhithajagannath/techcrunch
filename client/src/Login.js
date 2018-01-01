import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TechCrunch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  handleClick = () => {

  }

  render() {
    return (
      <div>
        <h1>Techcrunch Feeds</h1>
        <div>
          <TextField
            hintText="email@email.com"
          /><br />
          <br />
          <TextField
            hintText="password"
          /><br />
          <br />
          <RaisedButton label="Default" style={style} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default Login;
