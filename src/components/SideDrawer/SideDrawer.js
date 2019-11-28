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
          <li><a href = "/">About</a></li>
          <li><a href = "/">Contact</a></li>
        </ul>
    </nav>
  )
};

export default SideDrawer;
