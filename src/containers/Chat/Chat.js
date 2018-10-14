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

    sentMsgHandler = (e, action) => {
        e.preventDefault()
        const updatedMessages = [...this.state.messages]
        let pressed = false
        if (e.keyCode && e.keyCode === 13) {
            pressed = true
        }
        if (this.state.userInput.length > 0) {
            if (pressed || action === 'click') {
                updatedMessages.unshift({
                    author: 'Guest',
                    msg: this.state.userInput
                })
                this.setState({messages: updatedMessages, userInput: ''})
            }
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
                        keyPressed={this.sentMsgHandler}
                        msgInput={this.state.userInput} />
                    <Button clicked={(e) => this.sentMsgHandler(e, 'click')}>Enviar</Button>
                </div>
            </div>
        )
    }
}

export default Chat;