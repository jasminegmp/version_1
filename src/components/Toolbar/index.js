import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./styles.scss";
import { HashLink as Link } from 'react-router-hash-link';


class Toolbar extends React.Component{

  state = { hide: false };

  hideToolbar = () => {
    const { hide } = this.state

    window.scrollY > this.prev ?
      !hide && this.setState({ hide: true })
      :
      hide && this.setState({ hide: false });

    this.prev = window.scrollY;

  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.hideToolbar);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.hideToolbar);
  }

  render() {
    const classHide = this.state.hide ? 'hide' : '';
    return (
        <div className = {`toolbar ${classHide}`}>

            <nav className = "toolbar_navigation">
                <div className = "toolbar_toggle-button">
                  <DrawerToggleButton click = {this.props.drawerClickHandler}/>
                </div>
                <div className = "toolbar-logo">
                   <Link to =''>
                    <svg width="100%" height="100%" viewBox="0 0 350 350" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
                      <path id="j" d="M125.657,18.932c33.847,0.198 101.541,0.595 101.541,0.595l0.689,150.382c0,0 -1.641,48.794 -51.562,49.481c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{fill: "none", stroke: "#99738e", strokeWidth: "24px"}}/>
                      <path id="g" d="M126.568,168.173c0.22,-25.398 12.422,-54.349 50.006,-54.646c38.38,-0.302 50.847,35.413 50.959,54.646c0.093,16.172 0,92.408 0,92.408c0,0 -1.038,49.046 -50.959,49.733c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{fill: "none", stroke: "#f64c72", strokeWidth: "24px"}}/>
                    </svg>
                  </Link>
                              
                </div>
                <div className = "spacer"></div>
                <div className = "toolbar_navigation-items">
                    <ul>
                      <li><Link to='/#about'>About</Link></li>
                      <li><Link to='/#timeline'>Timeline</Link></li>
                      <li><Link to='/#portfolio'>Personal Projects</Link></li>
                      <li><Link to='/writing'>Writing</Link></li>
                      <li><Link to='/#contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>

      
    )
  }
}

export default Toolbar;
