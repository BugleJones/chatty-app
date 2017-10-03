import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      error: '',
    }

    this.onContent = this.onContent.bind(this);
    this.onUsername = this.onUsername.bind(this);
  }

  onContent(event) {
    this.setState({
      content: event.target.value
    })
    console.log(this.state.content);
  }

  onUsername(event) {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  }



  render() {

    return (
      <div>
        <footer className="chatbar">
          <input
          value={this.state.username}
          className="chatbar-username"
          defaultValue={this.props.currentUser}
          onChange={this.onUsername}
          placeholder="Your Name (Optional)" />
          <input
          value={this.state.content}
          className="chatbar-message"
          onChange={this.onContent}
          placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
export default ChatBar;
