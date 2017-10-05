import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        name: 'Dr. U. Surname',
      },
      messages: [],
    };

    this.onNewMessage = this.onNewMessage.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
  }
  // load() {

  // }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');

    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }


    this.socket.onmessage = (event) => {
      const { messages } = this.state;
      const message = JSON.parse(event.data);
      
      // let allMessages = this.state.messages.push(JSON.parse(event.data))
      // console.log(allMessages)
      this.setState({
        messages: [...messages, message]
      });
    }
 
  }

  onNewMessage(newPost) {
    let newMessage = {
      username: this.state.currentUser.name,
      content: newPost,
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  onUserChange(newUsername) {
    this.setState({
      currentUser: {
        name: newUsername,
      }
    });
  }


  render() {
    console.log("render: ", (this.state));
    const { currentUser: { name }, messages } = this.state;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
          <MessageList messages={ messages } />
          <ChatBar username={ name }
                   onNewMessage={this.onNewMessage}
                   onUserChange={this.onUserChange} />
      </div>
    );
  }
}
export default App;
