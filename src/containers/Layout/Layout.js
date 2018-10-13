import React, { Component } from 'react';

import Styles from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={Styles.Layout}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;