const Words = require('./models/words');
const Users = require('./models/users');
const Profile = require('./models/profiles');
const userWords = require('./models/userWords');

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app, passport) {
  app.post('/api/word', Words.add);
  app.get('/api/word/:id', Words.get);
  app.post('/api/word/:id', ensureLoggedIn('/LoginRegistration'), Words.update);
  app.delete('/api/word/:id', ensureLoggedIn('/LoginRegistration'), Words.del);

  app.get('/api/words', Words.getAll);

  app.put('/api/register', Users.add);
  app.get('/api/user/:id', Users.get);
  app.post('/api/user/:id', Users.update);
  app.delete('/api/user/:id', Users.del);

  app.post('/api/user-words/', userWords.saveWords);
  app.post('/api/user-words/:userID/:wordID', userWords.updateMyWord);
  app.post(
    '/api/login',
    passport.authenticate('local', {failureRedirect: '/LoginRegistration'}),
    Profile.auth
  );
  app.post('/api/check', ensureLoggedIn(''), Profile.check);
  app.get('/api/logout', Profile.logout);
};
