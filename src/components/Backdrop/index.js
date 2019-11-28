import React from 'react';
import "./styles.scss";

const Backdrop = props => (
    <div className = "backdrop" onClick = {props.click}></div>
)

export default Backdrop;