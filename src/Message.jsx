import React, {Component} from 'react';


class Message extends Component {

  // handleMessage() {
  //   switch (this.props.message.type) {
  //     case "iMessage":
  //       return (<span className="message-content iMessage">{this.props.message.content}</span>);
  //       break;
  //     case "textMessage":
  //     default:
  //       return (<span className="message-content">{this.props.message.content}</span>);
  //       break;
  //   }
  // }

  
  render() {

    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    );
  }
}
export default Message;
