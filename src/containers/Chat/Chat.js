import React, { Component } from 'react';

import Styles from './Chat.module.css';

import HistoricalMessage from '../../components/HistoricalMessage/HistoricalMessage';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


class Chat extends Component {
    state = {
        messages: [],
        userInput: ''
    }

    syncMsgInputHandler = (e) => {
        let inputValue = e.target.value
        this.setState({userInput: inputValue})
    }

    sentMsgHandler = (e) => {
        e.preventDefault()
        const updatedMessages = [...this.state.messages]
        if (this.state.userInput.length > 0) {
            updatedMessages.push({
                author: 'Guest',
                msg: this.state.userInput
            })
            this.setState({messages: updatedMessages, userInput: ''})
        }
        
    }

    render() {
        return (
            <div className={Styles.Chat}>
                <HistoricalMessage messages={this.state.messages} />
                <div className={Styles.UserInput}>
                    <Input 
                        inputType='text'
                        placeholder='¿Que mensaje vas a enviar?'
                        changed={this.syncMsgInputHandler}
                        msgInput={this.state.userInput} />
                    <Button clicked={this.sentMsgHandler}>Enviar</Button>
                </div>
            </div>
        )
    }
}

export default Chat;