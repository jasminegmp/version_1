import React from 'react';
import "./styles.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add( fab, faEnvelope);


function LinkBar() {
  return (
    <div className = "linkbar-container">
        <ul>

        <li className = "github">
            <a href= "https://github.com/jasminegmp" target = "_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={['fab','github']}>
                    <div class = "highlight"></div>
                </FontAwesomeIcon>
            </a>
        </li>

        <li className = "medium">
            <a href="https://medium.com/@jasminegump" target = "_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab','medium']}>
                    <div class = "highlight"></div>
                </FontAwesomeIcon>
            </a>
        </li>

        <li className = "codepen">
            <a href="https://codepen.io/ladyjellington" target = "_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab','codepen']}>
                    <div class = "highlight"></div>
                </FontAwesomeIcon>
            </a>
        </li>

        <li className = "linkedin">
            <a href="https://www.linkedin.com/in/jasminegump" target = "_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={['fab','linkedin-in']}>
                    <div class = "highlight"></div>
                </FontAwesomeIcon>
            </a>
        </li>

        <li className = "email">
            <a href="mailto:jasminegmp@gmail.com" target = "_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon="envelope">
                    <div class = "highlight"></div>
                </FontAwesomeIcon>
            </a>
        </li>

        </ul>
    </div>

  );
}

export default LinkBar;
