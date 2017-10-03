import React, {Component} from 'react';

import Message from './Message.jsx';

class ChatBar extends Component {

  render() {
    return (
      <div>
        <Message />
        <footer className="chatbar">
          <input className="chatbar-username" defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
export default ChatBar;
