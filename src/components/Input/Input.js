import React from 'react';

import Styles from './Input.module.css';

const input = (props) => (
    <input 
        type={props.inputType} 
        placeholder={props.placeholder}
        onChange={props.changed} 
        onKeyUp={props.keyPressed}
        value={props.msgInput}
        className={Styles.Input} />
)

export default input;