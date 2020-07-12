import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
          <li><Link to='/writing'>Writing</Link></li>
          <li><Link to='/#about'>About</Link></li>
          <li><Link to='/#timeline'>Timeline</Link></li>
          <li><Link to='/#portfolio'>Personal Projects</Link></li>
          <li><Link to='/#contact'>Contact</Link></li>
        </ul>
    </nav>
  )
};

export default SideDrawer;
