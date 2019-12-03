import React from 'react';
import marked from "marked";
import Avatar from '../Avatar';
import "./styles.scss";
import "../../section.scss";

class About extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        markdown: null
    };
  }

  componentDidMount() {
    const readmePath = require("../../content/about/index.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }

  render() {
    const { markdown } = this.state;

    return (
      <div class = "section-container">
        <div class = "section-info about-info">
          <h1 class = "section-headline">About Me</h1>
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </div>
        <div class = "about-image">
          <Avatar/>
        </div>
      </div>
    )
  }
}

export default About;
