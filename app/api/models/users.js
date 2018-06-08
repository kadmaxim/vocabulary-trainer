const Mongo = require('./../config/mongo');
const md5 = require('md5');
const db = Mongo.db('users');

module.exports = {
  auth: function(req, res) {
    console.log('logged in');
    res.redirect('/admin');
  },
  login: function(req, res) {
    res.redirect(':8080/LoginRegistration');
  },
  logout: function(req, res) {
    req.logout();
    res.redirect('/admin');
  },
  home: function(req, res) {
    res.render('home', { user: req.user });
  },
  add: function(req, res, next) {
    let user = {};
    user.password = req.body.pass ? md5(req.body.pass) : '';
    user.login = req.body.log ? req.body.log : '';

    db.then(collection => {
      collection.insertOne(user).then(res.end('OK'), next);
    });
  },
  saveWords: function(req, res, next) {
    let userID = req.body.userID ? req.body.userID : '';
    let wordIDs = req.body.wordIDs ? req.body.wordIDs : '';
    if (wordIDs) {
      wordIDs.forEach(function(i, wordID) {
        //  db.then(collection => {
        //    collection.insertOne(user).then(res.end('OK'), next); // insertMany replace!!!
        //  });
      });
    }
  },
  updateMyWord: function(req, res, next) {
    let userID = new Mongo.objID(req.params.userID); // do we need this check here?
    let wordID = new Mongo.objID(req.params.wordID);

    let word = req.body.word ? md5(req.body.word) : '';

    db.then(collection => {
      collection
        .updateOne(
          { _id: userWordID },
          { $set: { login: login, password: password } }
        )
        .then(res.end('OK'), next);
    });
  },
  del: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);

    db.then(collection => {
      collection.deleteOne({ _id: userID }).then(res.end('OK'), next);
    });
  },
  update: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);
    let password = req.body.pswd ? md5(req.body.pswd) : '';
    let login = req.body.log ? req.body.log : '';

    db.then(collection => {
      collection
        .updateOne(
          { _id: userID },
          { $set: { login: login, password: password } }
        )
        .then(res.end('OK'), next);
    });
  },
  get: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);

    db.then(collection => {
      collection
        .find({ _id: userID })
        .toArray()
        .then(users => res.json(users), next);
    });
  },
  findById: function(id) {
    return new Promise((resolve, reject) => {
      db.then(collection => {
        collection
          .find({ _id: new Mongo.objID(id) })
          .toArray()
          .then(users => users[0])
          .then(resolve, reject);
      });
    });
  },
  findByName: function(username) {
    console.log(username);
    return new Promise((resolve, reject) => {
      db.then(collection => {
        collection
          .find({ login: username })
          .toArray()
          .then(users => users[0])
          .then(resolve, reject);
      });
    });
  }
};
