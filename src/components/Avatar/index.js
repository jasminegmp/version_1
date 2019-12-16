import React from 'react';
import "./styles.scss";

class Avatar extends React.Component{

  render() {

    return (
        <div className = "avatar_container">
            <a href = "https://jasminegump.com" target="_blank" rel="noopener noreferrer" >
                <div className = "avatar_overlay"></div>
                <img className = "avatar_profile-photo" src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1574114586/me_w2ijep.png" alt = "me"/>
                <div className = "avatar_hover-circle"></div>
            </a>
        </div>
    )
  }
}

export default Avatar;
