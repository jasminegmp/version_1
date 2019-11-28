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
                <div className = "toolbar-logo">
                  <a href="#!">
                    <svg width="100%" height="100%" viewBox="0 0 350 350" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
                      <path id="j" d="M125.657,18.932c33.847,0.198 101.541,0.595 101.541,0.595l0.689,150.382c0,0 -1.641,48.794 -51.562,49.481c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{fill: "none", stroke: "#99738e", strokeWidth: "24px"}}/>
                      <path id="g" d="M126.568,168.173c0.22,-25.398 12.422,-54.349 50.006,-54.646c38.38,-0.302 50.847,35.413 50.959,54.646c0.093,16.172 0,92.408 0,92.408c0,0 -1.038,49.046 -50.959,49.733c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{fill: "none", stroke: "#f64c72", strokeWidth: "24px"}}/>
                    </svg>
                  </a>
                              
                </div>
                <div className = "spacer"></div>
                <div className = "toolbar_navigation-items">
                    <ul>
                        <li><a href = "#about">About</a></li>
                        <li><a href = "#timeline">Timeline</a></li>
                        <li><a href = "#portfolio">Portfolio</a></li>
                        <li><a href = "#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

      
    )
  }
}

export default Toolbar;
