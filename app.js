var express = require('express');
var app = module.exports = express();

// Environment setup
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/static'));
//app.use(favicon(__dirname + '/public/images/favicon.png'));
app.configure('development', function(){
    app.use(express.errorHandler());
    app.locals.pretty = true;
});
app.configure('production', function(){
    app.use(express.errorHandler()); 
});

// Routes
var index = require('./routes/index');

app.get('/', index.home);
app.get('/about', index.about);
app.get('/contact', index.contact);

// Or external Router if you prefer
// require('./router')(app);

// Start server
app.listen(app.get('port'));
console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
