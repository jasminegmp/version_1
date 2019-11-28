import React from 'react';
import "./SideDrawer.scss";

const SideDrawer = props => {
  let drawerClasses = 'sidedrawer';
  if (props.show)
  {
    drawerClasses = 'sidedrawer open';
  }

  return (
    <nav className = {drawerClasses}>
        <ul>
          <li><a href = "#about">About</a></li>
          <li><a href = "#timeline">Timeline</a></li>
          <li><a href = "#portfolio">Portfolio</a></li>
          <li><a href = "#contact">Contact</a></li>
        </ul>
    </nav>
  )
};

export default SideDrawer;
