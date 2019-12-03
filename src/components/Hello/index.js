import React from 'react';
import marked from "marked";
import "./styles.scss";
import "../../section.scss";


class Hello extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        markdown: null
    };
  }

  componentDidMount() {
  const readmePath = require("../../content/hello/index.md");

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

  render(){
    const { markdown } = this.state;
    return (
      <div className = "section-fullpage">
        <div className = "hello-info">
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
          <p>
            <a className = "highlight" href = "https://jasminegump.com" target="_blank">Get in touch</a>
          </p>
        </div>
      </div>

    );
  }

}

export default Hello;
