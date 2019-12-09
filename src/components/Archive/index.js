import React from 'react';
import LinkBar from '../LinkBar'
import { Link, withRouter} from 'react-router-dom';

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
        }
    }

    render() {
        return(
            <div className = "archive">
                <LinkBar/>
            </div>
        )
    }


}


const Archive = withRouter(ArchiveBase);

export default ArchivePage;
export { Archive };
