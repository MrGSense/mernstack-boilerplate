import React, { Component } from 'react'

class Message extends Component{
    render() {
        return (
            <div className="Message">
                <h3>{this.props.name}</h3>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Message;