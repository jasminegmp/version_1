import React from 'react';
import "./styles.scss";

class Avatar extends React.Component{
  constructor(props) {
    super(props);

  }


  render() {

    return (
        <div class = "avatar_container">
            <a href = "https://jasminegump.com" target="_blank">
                <div class = "avatar_overlay"></div>
                <img class = "avatar_profile-photo" src = "https://res.cloudinary.com/dbo29vgn4/image/upload/v1574114586/me_w2ijep.png" alt = "photo of me"/>
                <div class = "avatar_hover-circle"></div>
            </a>
        </div>
    )
  }
}

export default Avatar;
