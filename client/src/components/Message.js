import React, { Component } from 'react'

class Message extends Component{
    render() {
        return (
            <div className="Message">
                <h3 className="Message__name">{this.props.name}</h3>
                <p className="Message__message">{this.props.message}</p>
            </div>
        )
    }
}

export default Message;