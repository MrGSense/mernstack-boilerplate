import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MessageForm />
                <MessageList />
            </div>
        )
    }
}

export default App;