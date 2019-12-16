import React from 'react';
import marked from "marked";
import Button from "../Button";
import "./styles.scss";
import "../../section.scss";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        markdown: null
    };
  }

  componentDidMount() {
    const readmePath = require("../../content/contact/index.md");
  
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
      <div className = "section-container" id = "contact">
          <div className = "section-info contact-info">
            <h1 className = "section-headline">Get In Touch</h1>
            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
            <div className = "button-email">
              <Button url = "mailto:jasminegmp@gmail.com" name = "Say Hi"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Contact;
