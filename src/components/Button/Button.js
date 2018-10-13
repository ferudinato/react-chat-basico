import React from 'react';

const button = (props) => (
    <button type={props.btnType} onClick={props.clicked}>{props.children}</button>
)

export default button;