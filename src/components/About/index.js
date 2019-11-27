import React from 'react';
import marked from "marked";
import "./styles.scss";

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
      <section>
        <article dangerouslySetInnerHTML={{__html: markdown}}></article>
      </section>
    )
  }
}

export default About;
