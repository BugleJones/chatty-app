import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      username: props.username,
    }
  }

  onContent = event => {
    if(event.key !== 'Enter') { return; }
    
    this.props.onNewMessage(this.state.content);
    console.log("new message", this.state.content);
    this.setState({ content: '' });
  }

  onContentUpdated = event => {
    this.setState({
      content: event.target.value
    });
  }

  onUsername = event => {
    if(event.key !== 'Enter') { return; }
    
    this.props.onUserChange(this.state.username);
    console.log("new username", this.state.username)
  }

  onUsernameUpdated = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    return (
      <div>
        <footer className="chatbar">
          <input
          value={this.state.username}
          className="chatbar-username"
          onChange={this.onUsernameUpdated}
          onKeyDown={this.onUsername}
          placeholder="Type in your username" />
          <input
          value={this.state.content}
          className="chatbar-message"
          onChange={this.onContentUpdated}
          onKeyDown={this.onContent}
          placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
export default ChatBar;
