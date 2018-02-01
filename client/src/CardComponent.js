import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class CardComponent extends Component {

    constructor(props) {
    super(props)
    this.state = {
      likecount: 0,
    }
  }

  likeClicked = () => {
    this.setState({
      likecount: this.state.likecount + 1
    })
    return;
  }

 
  render() {

    return (
    <div>
      <Card style={{"width":"30%"}}>
        <CardHeader
          title={this.props.data.source_name}
          subtitle={this.props.data.date}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.author} />}
        >
          <img src={this.props.data.image} alt=""/>
        </CardMedia>
        <CardTitle title={this.props.data.title} subtitle={this.props.data.url} />

        <p>
          {this.props.data.content}
        </p>
        <CardActions>
          <FlatButton label="Article Source" href={this.props.data.url}/>
        </CardActions>
        <CardActions>
          <button onClick={this.likeClicked.bind(this)}> Like </button>
          <span> {this.state.likecount} </span>
        </CardActions>
      </Card>
      <br/>
    </div>
  )
  }
}
export default CardComponent;