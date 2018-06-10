const Mongo = require('./../config/mongo');
const md5 = require('md5');
const db = Mongo.db('users');

module.exports = {
  add: function(req, res, next) {
    let user = {};
    user.password = req.body.pass ? md5(req.body.pass) : '';
    user.login = req.body.log ? req.body.log : '';

    db.then(collection => {
      collection.findOne({login: user.login}).then(obj => {
        if (obj !== null) {
          res.json({status: 'error', message: 'User already exist'});
        } else {
          collection
            .insertOne(user)
            .then(
              res.json({status: 'success', message: 'User successfully added'}),
              next
            );
        }
      });
    });
  },
  del: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);

    db.then(collection => {
      collection.deleteOne({_id: userID}).then(res.end('OK'), next);
    });
  },
  update: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);
    let password = req.body.pswd ? md5(req.body.pswd) : '';
    let login = req.body.log ? req.body.log : '';

    db.then(collection => {
      collection
        .updateOne({_id: userID}, {$set: {login: login, password: password}})
        .then(res.end('OK'), next);
    });
  },
  get: function(req, res, next) {
    let userID = new Mongo.objID(req.params.id);

    db.then(collection => {
      collection
        .find({_id: userID})
        .toArray()
        .then(users => res.json(users), next);
    });
  },
  findById: function(id) {
    return new Promise((resolve, reject) => {
      db.then(collection => {
        collection
          .find({_id: new Mongo.objID(id)})
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
          .find({login: username})
          .toArray()
          .then(users => users[0])
          .then(resolve, reject);
      });
    });
  }
};
