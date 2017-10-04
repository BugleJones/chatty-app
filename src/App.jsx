import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        currentUser: {
          name: 'Anonymous'
        },
        messages: [],
      }
    }
    this.onNewMessage = this.onNewMessage.bind(this);
  }
  // load() {

  // }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }

    this.socket.onmessage = (event) => {
      console.log('Inside ComponentDidMount Function', JSON.parse(event.data));
      let messageObj = JSON.parse(event.data)

      let allMessages = this.state.messages.concat(messageObj)
      this.setState({messages: allMessages});
    }
 
  }

  onNewMessage(newPost) {
    let newMessage = {
      type: "message",
      username: this.state.data.currentUser.name,
      content: newPost,
    };
    this.socket.send(JSON.stringify(newMessage));
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
          <MessageList messages={ this.state.data.messages }/>
          <ChatBar currentUser={ this.state.data.currentUser} onNewMessage={this.onNewMessage}/>
      </div>
    );
  }
}
export default App;
