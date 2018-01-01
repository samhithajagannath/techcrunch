import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardComponent = (props) => (
  <div>
    <Card style={{"width":"30%"}}>
      <CardHeader
        title={props.data.source_name}
        subtitle={props.data.date}
      />
      <CardMedia
        overlay={<CardTitle title={props.data.title} subtitle={props.data.author} />}
      >
        <img src={props.data.image} alt=""/>
      </CardMedia>
      <CardTitle title={props.data.title} subtitle={props.data.url} />

      <p>
        {props.data.content}
      </p>
      <CardActions>
        <FlatButton label="Article Source" href={props.data.url}/>
      </CardActions>
    </Card>
    <br/>
  </div>
);


function clickhandler(url){
  return window.open(url);
}
export default CardComponent;