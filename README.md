# Express.js Bootstrap Boilerplate

A simple boilerplate I made for personal use as a starting point for Express.js + Jade projects that use Bootstrap. Font Awesome has also been included because I find it quite handy to have. Quite handy for hackathons.

## Dependencies
### Pre-requisite
* [Node.js](http://nodejs.org)

### Installed via npm or included
* [Express.js](http://expressjs.com)
* [Jade](http://jade-lang.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* [node-mysql](https://github.com/felixge/node-mysql) (Optional)

## Usage
1. Download a copy of the repository
  * I recommend not cloning the repository to avoid having to reconfigure git remotes. It's easier to just download a clean copy using the "Download ZIP" option to the right.
  * Alternatively, you can fork the repo, make your changes (e.g. rename) and then clone it to use as your own project repo.
2. Install dependencies using npm  
`$ npm install`
3. Run the app  
`$ node app.js`
4. Navigate to [http://localhost:3000](http://localhost:3000) to view your app

### Database
I've included a sample config for a MySQL database, but it is currently disabled. To enable/disable it, check `common.js` and comment/uncomment the appropriate line.
```js
/* MySQL Database */
// var db = require('./db').init(conf);
var db = null;
```

## Contributions
If you want to make any improvements to the boilerplate, feel free to fork the repo and then send me a pull request. I don't consider myself an Express expert by any means.

## License
MIT License. See [LICENSE](/LICENSE)