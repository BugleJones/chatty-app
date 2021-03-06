import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages.map(message => {
    return <Message
      key = { message.id }
      type = { message.type }
      username = { message.username }
      content = { message.content } />
  });

    return (
      <div>
        <main className="messages">
            { messages }
        </main>
      </div>
    );
  }
}
export default MessageList;
