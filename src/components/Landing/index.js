import React from 'react';
import Backdrop from '../Backdrop'
import Hello from '../Hello'
import {Router, withRouter} from 'react-router-dom';
import LinkBar from '../LinkBar'
import About from '../About'
import Timeline from '../Timeline'
import Portfolio from '../Portfolio'
import Contact from '../Contact';
import "./styles.scss";

class Landing extends React.Component{

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen} // new better way to toggle
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }



  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen)
    {
      backDrop = <Backdrop click = {this.backdropClickHandler}/>;
    }
    return (
      <div className = "landing">
          <Hello/>
          <About/>
          <Timeline/>
          <Portfolio/>
          <Contact/>
          <LinkBar/>
      </div>

    );
    }
}

export default withRouter(Landing);
