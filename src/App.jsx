import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        },
        {
          id: 3,
          username: 'Michelle',
          content: 'Hello there!',
        }
      ]
      }
      // this.onNewMessage = this.onNewMessage.bind(this);
    }

  // load() {

  // }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }

    this.socket.onmessage = (event) => {
      console.log('Inside Component DidMount Function',JSON.parse(event.data));
      let message = JSON.parse(event.data)
    }

    this.setState({data: 
      {messages: this.state.data.messages.concat(JSON.parse(event.data)),
      currentUser: {name: this.state.data.currentUser.name} }})

  }

  onNewMessage(newPost) {
    const newMessage = {
      id: this.state.data.newId,
      username: this.state.data.currentUser.name,
      content: newPost,
    };
    const updatedMessages = this.state.data.messages.concat(newMessage)
    this.setState({
      messages: updatedMessages,
      newId: this.state.newId + 1,
    })
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
