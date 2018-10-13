import React, { Component } from 'react';

import Styles from './Chat.module.css';

import HistoricalMessage from '../../components/HistoricalMessage/HistoricalMessage';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


class Chat extends Component {
    

    render() {
        return (
            <div className={Styles.Chat}>
                <HistoricalMessage />
                <div className={Styles.UserInput}>
                    <Input />
                    <Button>Enviar</Button>
                </div>
            </div>
        )
    }
}

export default Chat;