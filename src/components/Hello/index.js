import React from 'react';
import "./styles.scss";

function Hello() {
  return (
    <div className = "hello-container">
      <div className = "hello-info">
          <h1><strong>Hi! </strong></h1>
          <h1>I'm <strong>Jasmine Gump</strong>, 
          a design-loving software engineer focused on designing and implementing 
          beautiful frontend. Ex-firmware  engineer and data miner.</h1>
          <p>
              <a className = "highlight" href = "https://jasminegump.com" target="_blank">Get in touch</a>
          </p>
        </div>
    </div>

  );
}

export default Hello;
