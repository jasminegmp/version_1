import React from 'react';
import marked from "marked";
import { withRouter} from 'react-router-dom';
import "./styles.scss";
import "../../section.scss";

// a page
// returns a signup header and form
const WritingPage =() => {
    return(
        <Writing />  
    )

}

// a form
class WritingBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markdown: null
        }
    }


  componentDidMount() {
    const readmePath = require("../../content/writing/index.md");
  
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
        return(
          <div className = "archive">
            <div className = "section-container">
                <div className = "section-info archive-info ">
                    <h1 className = "section-headline">Writing</h1>
                    <h2 className = "section-subheadline">A list of things I've written on Medium.</h2>
                    <article className = "hl-table-row "  dangerouslySetInnerHTML={{__html: markdown}}></article>
                </div>
            </div>
            </div>
        )
    }


}


const Writing = withRouter(WritingBase);

export default WritingPage;
export { Writing };
