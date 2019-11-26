import React from 'react';
import Hello from '../Hello'
import "./styles.scss";
import { CSSTransitionGroup } from 'react-transition-group' // ES6


function Landing() {
  // read up on using CSS transitions here:
  //https://github.com/reactjs/react-transition-group/tree/v1-stable

  return (
    <div>
      <CSSTransitionGroup
      transitionName="fadein"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <Hello/>
      </CSSTransitionGroup>
    </div>

  );
}

export default Landing;
