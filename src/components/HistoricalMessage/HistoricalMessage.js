import React from 'react';

import Styles from './HistoricalMessage.module.css';

const historicalMsg = (props) => {
    return (
        <section className={Styles.HistoricalMessage}>
            <ul className={Styles.Messages}>
                    <li>Message 01</li>
                    <li>Message 02</li>
                    <li>Another Message 03</li>
                </ul>
        </section>
    )
}

export default historicalMsg;