import React, {Component} from 'react';

export default class ChatBar extends Component {

  //Message change
  onContent = event => {
    if(event.key !== 'Enter' || event.target.value.trim() === "") { return; }
    this.props.onNewMessage(event.target.value);
    event.target.value = '';
  }

  //Username change
  onUsername = event => {
    if(event.key === 'Enter') {
      if (this.props.username !== event.target.value) {
      this.props.onUserChange(event.target.value)
      this.refs.message.focus();
      }
    }
  }

  render() {

    return (
      <div>
        <footer className="chatbar">
          <input
          defaultValue={this.props.username}
          className="chatbar-username"
          ref="username"
          onKeyDown={this.onUsername}
          />
          <input
          ref="message"
          className="chatbar-message"
          onKeyDown={this.onContent}
          placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
