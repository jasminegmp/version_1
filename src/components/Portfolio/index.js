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
      <div className = "section-container portfolio-container" id = "portfolio">
        <div className = "section-info portfolio-info">
          <h1 className = "section-headline">Portfolio</h1>
          <div className = "section-row portfolio-row">
            <div className = "portfolio-item">1</div>
            <div className = "portfolio-item">2</div>
            <div className = "portfolio-item">3</div>
            <div className = "portfolio-item">4</div>
            <div className = "portfolio-item">5</div>
            <div className = "portfolio-item">6</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
