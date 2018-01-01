import React, { Component } from 'react';
import CardComponent from './CardComponent'

class Tumblr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      }
  }

  componentDidMount() {
    var myHeaders = new Headers();
    fetch('/feed')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        console.log(d);
        this.setState({
          techcrunchfeed: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.techcrunchfeed) return <p>Loading...</p>
      let posts = this.state.techcrunchfeed.articles;
      let cards = []
      let i = 0;
      for(var post of posts) {
              var obj ={}
              obj.id = i
               obj.title = post.title
                obj.image = post.urlToImage
                obj.url = post.url
                obj.date = post.publishedAt
                obj.author = post.author
                obj.source_name = post.source.name
                obj.blog_name = post.blog_name
                obj.content = post.description

               cards.push(<CardComponent key={i} data={obj}/>)
                i++;
        }
      return (
        <div>
          <h1>Techcrunch Feeds</h1>
           <center>
            {cards}
          </center>
        </div>
      )
    }
  }

export default TechCrunch;


