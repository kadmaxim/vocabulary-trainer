const Words = require('./models/words');
const Users = require('./models/users');

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function (app, passport) {
    app.post('/api/word', Words.add);
    app.get('/api/word/:id', Words.get);
    app.post('/api/word/:id', ensureLoggedIn('/admin/login'), Words.update);
    app.delete('/api/word/:id', ensureLoggedIn('/admin/login'), Words.del);

    app.get('/api/words', Words.getAll);
    
    app.put('/api/user', Users.add);
    app.get('/api/user/:id', Users.get);
    app.post('/api/user/:id', Users.update);
    app.delete('/api/user/:id', Users.del);
	
	// TODO: Views for the following routes
    // app.get('/admin', Users.home);
    // app.get('/admin/login', Users.login);
    //app.post('/admin/login', passport.authenticate('local', { failureRedirect : '/admin/login' }), Users.auth);
    // app.get('/admin/profile', ensureLoggedIn('/admin/login'), Users.profile);
    //app.get('/logout', ensureLoggedIn('/admin/login'), Users.logout);
};
