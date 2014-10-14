module.exports = function(app){
    var index = require('./routes/index');

    app.get('/', index.home);
    app.get('/about', index.about);
    app.get('/contact', index.contact);
};
