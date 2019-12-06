import React from 'react';
import marked from "marked";
import "./styles.scss";
import "../../section.scss";

class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        markdown: null
    };
  }



  render() {
    const { markdown } = this.state;

    return (
      <div class = "section-container" id = "portfolio">
        <div class = "section-info portfolio-info">
          <h1 class = "section-headline">Portfolio</h1>
        </div>
      </div>
    )
  }
}

export default Portfolio;
