import React from 'react';
import "./styles.scss";

const Button = props => (
    <button>
        <a class = "button" href = {props.url} >{props.name}</a>
    </button>
);

export default Button;
