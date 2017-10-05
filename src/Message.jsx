import React, {Component} from 'react';


class Message extends Component {

  handleMessage() {
    switch (this.props.type) {
      case "postNotification":
        return (
        <div className="notification">
          <span className="notification-content">{this.props.content}</span>
        </div>)
      case "postMessage":
        default:
        return (
          <div className="message">
            <span className="message-username">{this.props.username}</span>
            <span className="message-content">{this.props.content}</span>
          </div>)
        break;
    }
  }

  
  render() {

    return (
      <div>
        {this.handleMessage()}
      </div>
    );
  }
}
export default Message;
