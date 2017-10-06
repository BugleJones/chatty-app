# Chatty Project

Chatty is a simple, yet responsive and user-friendly, single-page Slack clone.

Chatty is built using React and WebSockets (ws). In addition, this app benefits from the use of Babel, Sass, Express, uuid and webpack.

## Final Product

!["Chatty Intro Page"](https://github.com/BugleJones/chatty-app/blob/master/docs/Open%20Conversation.png)
!["Chatty Conversation in full swing"](https://github.com/BugleJones/chatty-app/blob/master/docs/Conversations.png)

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [WebSockets] (https://github.com/websockets/ws)
