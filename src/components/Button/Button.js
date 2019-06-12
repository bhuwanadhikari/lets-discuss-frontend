import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button
            className={props.btnSize} 
            onClick = {props.clicked}
        >
           {props.title}
        </button>
    )
}

export default Button;
