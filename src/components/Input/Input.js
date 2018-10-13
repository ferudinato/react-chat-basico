import React from 'react';

const input = (props) => (
    <input 
        type={props.inputType} 
        placeholder={props.placeholder}
        onChange={props.changed} 
        value={props.val} />
)

export default input;