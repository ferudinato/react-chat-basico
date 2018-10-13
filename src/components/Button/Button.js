import React from 'react';

import Styles from './Button.module.css';

const button = (props) => (
    <button 
        type={props.btnType} 
        onClick={props.clicked}
        className={Styles.Button}>{props.children}</button>
)

export default button;