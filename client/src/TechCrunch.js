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
          githubData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.githubData) return <p>Loading...</p>
  }

export default TechCrunch;


