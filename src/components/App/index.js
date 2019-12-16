import React from 'react';
import Loader from '../Loader';
import ArchivePage from '../Archive';
import Landing from '../Landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer'
import "./styles.scss";
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Backdrop from '../Backdrop'

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        loading: true, 
        sideDrawerOpen: false
    };
  }

  componentDidMount() {
    setTimeout(() =>{ //Start the timer
      this.setState({loading: false}) //After 1 second, set render to true
    }, 4000);
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen} // new better way to toggle
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
      let backDrop;

      if (this.state.sideDrawerOpen)
      {
        backDrop = <Backdrop click = {this.backdropClickHandler}/>;
      }

      // read up on using CSS transitions here:
      //https://github.com/reactjs/react-transition-group/tree/v1-stable

      if (this.state.loading) return <Loader/>;
      return (
        <Router>
          <Switch>
            <div className = "app-container landing">
              <Route exact path='/' component={Landing}/>
              <Route path="/archive" component={ArchivePage}/>
              <CSSTransitionGroup
              transitionName="fadein"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
                <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                <SideDrawer show = {this.state.sideDrawerOpen}/>
                {backDrop}
                
              </CSSTransitionGroup>

            </div>
          </Switch>
        </Router>
      )
  }
}

export default App;
