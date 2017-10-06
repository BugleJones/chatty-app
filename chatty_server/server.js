// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.


wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

function broadcastUserCount() {
  const userCount = wss.clients.size
  wss.broadcast({
    type: "user-count",
    count: userCount,
  })
}


wss.on('connection', (ws) => {
  console.log(`${wss.clients.size} user(s) are connected`);
  broadcastUserCount();

  ws.on('message', function incoming(data) {
    console.log('received: %s', data)
    let messageData;
    try {
      messageData = JSON.parse(data)
    }
    catch (error) {
      console.log(error);
      return;
    }

    messageData.id = uuidv4();

    wss.broadcast(messageData)

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  })

  ws.on('close', () => {
    broadcastUserCount();
    console.log('Client disconnected')
  })
});


// this comment is a dummy comment, and only a dummy would read it