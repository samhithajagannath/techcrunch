import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class TechCrunch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
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
          <RaisedButton label="Default" style={style}/>
        </div>
      </div>
    )
  }
}

export default Login;
