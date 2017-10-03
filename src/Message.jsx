import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
      }
    }

  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">I won't be impressed with technology until I can download food. I'm also into odd shapes</span>
        </div>
      </div>
    );
  }
}
export default Message;
