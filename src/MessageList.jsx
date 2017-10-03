import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    return (
      <div>
        <main className="messages">
          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
        <Message />
      </div>
    );
  }
}
export default MessageList;
