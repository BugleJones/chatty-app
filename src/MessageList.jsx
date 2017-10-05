import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    console.log('Rendering message list');
    const messages = this.props.messages.map(message => {
    return <Message
      key = { message.id }
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
