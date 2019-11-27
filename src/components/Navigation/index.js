import React from 'react';
import "./styles.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHistory, faLaptopCode, faCommentDots } from '@fortawesome/free-solid-svg-icons';
library.add( faUser, faHistory, faLaptopCode, faCommentDots );

class Navigation extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div class = "navigation">
            <div class = "navigation-container">
                <nav>
                    
                    <div class = "nav-mobile">
                        <a id="nav-toggle" href="#!">
                            <span></span>
                        </a>
                    </div>
                    
                    <ul class="nav-list">
                        <li>
                            <a href="#about">
                            <FontAwesomeIcon icon="user" size="lg"/>
                            <div class = "title">About</div>
                            </a>
                        </li>
                
                        <li> 
                            <a href="#timeline">
                            <FontAwesomeIcon icon="history" size="lg"/>
                            <div class = "title">Timeline</div>
                            </a>
                        </li>
                
                        <li>
                            <a href="#portfolio">
                            <FontAwesomeIcon icon="laptop-code" size="lg"/>
                            <div class = "title">Portfolio</div>
                            </a>
                        </li>
                
                        <li>
                            <a href="#contact">
                                <FontAwesomeIcon icon="comment-dots" size="lg"/>
                                <div class = "title">Contact</div>
                            </a>
                        </li>
                    </ul>
                
                    
                </nav>
            </div> 
      </div>
      
    )
  }
}

export default Navigation;
