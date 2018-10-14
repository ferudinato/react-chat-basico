import React from 'react';

import Styles from './HistoricalMessage.module.css';

const historicalMsg = (props) => {
    return (
        <section className={Styles.HistoricalMessage}>
            <ul className={Styles.Messages}>
                {props.messages.map((i, idx) =>
                    <li key={idx}><span className={Styles.Author}>{i.author}:</span>{i.msg}</li>
                )}
            </ul>
        </section>
    )
}

export default historicalMsg;