import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./styles.scss";


class Toolbar extends React.Component{
  constructor(props) {
    super(props);

  }


  render() {
    return (
        <div className = "toolbar">
            <nav className = "toolbar_navigation">
                <div className = "toolbar_toggle-button">
                  <DrawerToggleButton click = {this.props.drawerClickHandler}/>
                </div>
                <div className = "toolbar-logo"><a href = "/">THE LOGO</a></div>
                <div className = "spacer"></div>
                <div className = "toolbar_navigation-items">
                    <ul>
                        <li><a href = "/">About</a></li>
                        <li><a href = "/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

      
    )
  }
}

export default Toolbar;
