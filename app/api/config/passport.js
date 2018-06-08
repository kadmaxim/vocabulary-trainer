const LocalStrategy = require('passport-local').Strategy;
const md5 = require('md5');

const Users = require('./../models/users');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    Users.findById(id).then(user => done(null, user), done);
  });

  passport.use(
    'local',
    new LocalStrategy(function(username, password, done) {
      Users.findByName(username).then(user => {
        if (!user || user.password !== md5(password)) {
          return done(null, false);
        }

        return done(null, user);
      }, done);
    })
  );
};
