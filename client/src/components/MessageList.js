import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
    constructor(){
        super();
        this.state = {
            messages: []
        };
    }

    getMessages(){
        fetch('/api/messages')
        .then(res => res.json())
        .then(messages => this.setState({messages}));
    }

    componentDidMount() {
        this.getMessages();
    }

    componentDidUpdate(){
        this.getMessages();
    }

    render() {
        return (
            <div className="MessageList">
                <h1>Message List</h1>
                
                {this.state.messages.reverse().map(message => 
                    <Message key={message._id} name={message.name} message={message.message} />
                )}
            </div>
        )
    }
}

export default MessageList;