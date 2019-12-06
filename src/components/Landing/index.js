import React from 'react';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop'
import Hello from '../Hello'
import LinkBar from '../LinkBar'
import About from '../About'
import Timeline from '../Timeline'
import Contact from '../Contact'
import "./styles.scss";
import { CSSTransitionGroup } from 'react-transition-group' // ES6


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

  // read up on using CSS transitions here:
  //https://github.com/reactjs/react-transition-group/tree/v1-stable

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen)
    {
      backDrop = <Backdrop click = {this.backdropClickHandler}/>;
    }
    return (
      <div className = "landing">
        <CSSTransitionGroup
        transitionName="fadein"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

          <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
          {backDrop}
          <Hello/>
          <About/>
          <Timeline/>
          <Contact/>
          <LinkBar/>
        </CSSTransitionGroup>
      </div>

    );
    }
}

export default Landing;
