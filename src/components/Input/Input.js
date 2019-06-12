import React from 'react'
import './Input.css';

function Input(props) {
    return (
        <input
            className={props.inputSize}
            placeholder={props.placeholder}
            type="text"
            onChange = {props.changed}
        />
    )
}

export default Input
