import React from 'react';

import Styles from './Input.module.css';

const input = (props) => (
    <input 
        type={props.inputType} 
        placeholder={props.placeholder}
        onChange={props.changed} 
        value={props.val}
        className={Styles.Input} />
)

export default input;