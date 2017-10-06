import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      online: false,
      connecting: true,
      userCount: 0,
      username: 'U. Surname',
      messages: [],
    };
  }

  connect() {
    this.socket = new WebSocket(`ws://${location.hostname}:3001/`);

    this.setState({ connecting: true });

    this.socket.onopen = (event) => {
      console.log('Connected to server');
      this.setState({ online: true, connecting: false, });
      if(this.timer) {
        clearInterval(this.timer);
      }
    }


    this.socket.onclose = event => {
      this.setState({ online: false });
      if(!this.timer) {
        this.timer = setInterval(() => {
          this.connect(); // reconnect
        }, 5000);
      }
    }

    this.socket.onmessage = (event) => {
      const { messages } = this.state;
      let message;
      try {
        message = JSON.parse(event.data);
      } 
      catch (error) {
        console.log(error)
        return;
      }
      console.log(message)
      switch (message.type) {
        case "postMessage":
        case "postNotification":
          this.setState({
            messages: [...messages, message]
          })
          break;
        case "user-count":
          this.setState({
            userCount: message.count
          })
          break;
        default:
          break;
        }
      }

    this.socket.onerror = (event) => {
      console.info('Websocket Server is down');
    }
  }

  disconnect() {
    if(this.socket) {
      this.socket.close();
    }
  }

  componentDidMount() {
    this.connect();
  }

  componentWillUnmount() {
    this.disconnect();
  }

  sendData(payload) {
    this.socket.send(JSON.stringify(payload));
  }

  onNewMessage = content => {
    const { username } = this.state;

    this.sendData({
      type: "postMessage",
      username,
      content,
    });
  }

  onUserChange = username => {
    this.sendData({
      type: "postNotification",
      content: `${this.state.username} has changed their username to ${username}`
    });
    this.setState({ username })
  }

  render() {
    // console.log("render: ", (this.state));
    
    const { username, messages, online, connecting, userCount } = this.state;
    return (
      <div>
        <NavBar online={ online } userCount={ userCount } connecting={ connecting } />
        <MessageList messages={ messages } />
        <ChatBar username={ username }
                 onNewMessage={this.onNewMessage}
                 onUserChange={this.onUserChange} />
      </div>
    );
  }
}

export function NavBar(props) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h2 className="user-status"> { props.userCount + " user(s)" } {props.online ? "online" : "offline"} { props.connecting ? "connecting..." : "" }</h2>
    </nav>
  );
}
