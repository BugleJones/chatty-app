import React, {Component} from 'react';

export default class ChatBar extends Component {

  onContent = event => {
    if(event.key !== 'Enter' || event.target.value.trim() === "") { return; }
    
    // this.props.onNewMessage(this.state.content);
    // this.setState({ content: '' });
    this.props.onNewMessage(event.target.value);
    event.target.value = '';
  }

  onUsername = event => {    
    if(event.key === 'Enter') {
      this.props.onUserChange(event.target.value)
      this.refs.message.focus();
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
