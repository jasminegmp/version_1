import React from 'react';
import marked from "marked";
import { withRouter} from 'react-router-dom';
import "./styles.scss";
import "../../section.scss";

// a page
// returns a signup header and form
const ArchivePage =() => {
    return(
        <Archive />  
    )

}

// a form
class ArchiveBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markdown: null
        }
    }


  componentDidMount() {
    const readmePath = require("../../content/archive/index.md");
  
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
            <div class = "section-container">
                <div class = "section-info archive-info ">
                    <h1 class = "section-headline">Archive</h1>
                    <h2 class = "section-subheadline">A list of things I've worked on.</h2>
                    <article class = "hl-table-row "  dangerouslySetInnerHTML={{__html: markdown}}></article>
                </div>
            </div>
        )
    }


}


const Archive = withRouter(ArchiveBase);

export default ArchivePage;
export { Archive };
