# Chatty Project

Chatty is a simple, yet responsive and user-friendly, single-page Slack clone.

Chatty is built using React and WebSockets (ws). In addition, this app benefits from the use of Babel, Sass, Express, uuid and webpack.

## Final Product

!["Screenshot of Tweeter Welcome Page"](https://github.com/BugleJones/tweeter/blob/master/public/docs/Landing-Page.png)
!["Screenshot of Too Many Characters!"](https://github.com/BugleJones/tweeter/blob/master/public/docs/Too-Many-Characters.png)
!["Screenshot of Hidden Tweet Menu"](https://github.com/BugleJones/tweeter/blob/master/public/docs/Tweet-Menu-Hidden.png)

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
