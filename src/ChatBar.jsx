import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      username: '',
    }

    this.onContent = this.onContent.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onContent(event) {
    this.setState({
      content: event.target.value
    })
  }

  onEnter(event) {
    if(event.key === 'Enter') {
      this.props.onNewMessage(this.state.content)
    }
    console.log("this is the enter value", this.state.content)
  }

  render() {

    return (
      <div>
        <footer className="chatbar">
          <input
          className="chatbar-username"
          onChange={this.onUsername}
          defaultValue={this.props.currentUser.name}
          onKeyDown={this.onEnter}/>
          <input
          type="text"
          value={this.state.content}
          className="chatbar-message"
          onChange={this.onContent}
          onKeyDown={this.onEnter}
          placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
export default ChatBar;
