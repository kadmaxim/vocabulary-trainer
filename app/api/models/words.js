const Mongo = require('./../config/mongo');
const db = Mongo.db('words');

module.exports = {
  add: function(req, res, next) {
    let word = req.body;

    db.then(collection => {
      collection.insertOne(word).then(res.end('OK'), next);
    });
  },
  del: function(req, res, next) {
    let wordID = new Mongo.objID(req.params.id);

    db.then(collection => {
      collection.findOne({_id: wordID}).then(obj => {
        if (
          obj !== null &&
          req.user &&
          obj.user_id === req.user._id.toString()
        ) {
          collection.deleteOne({_id: wordID}).then(res.end('OK'), next);
        } else {
          res.json({
            status: 'error',
            message: "You couldn't delete this word"
          });
        }
      });
    });
  },
  update: function(req, res, next) {
    let wordID = new Mongo.objID(req.params.id);
    let {original, translation, img_url} = req.body;

    db.then(collection => {
      collection.findOne({_id: wordID}).then(obj => {
        if (
          obj !== null &&
          req.user &&
          obj.user_id === req.user._id.toString()
        ) {
          collection
            .updateOne({_id: wordID}, {$set: {original, translation, img_url}})
            .then(res.end('OK'), next);
        } else {
          res.json({
            status: 'error',
            message: "You couldn't update this word"
          });
        }
      });
    });
  },
  get: function(req, res, next) {
    let wordID = new Mongo.objID(req.params.id);
    db.then(collection => {
      collection
        .find({_id: wordID})
        .toArray()
        .then(words => res.json(words), next);
    });
  },
  loadAll: function() {
    return new Promise((resolve, reject) => {
      db.then(collection => {
        collection
          .find()
          .toArray()
          .then(resolve, reject);
      });
    });
  },
  getAll: function(req, res, next) {
    db.then(collection => {
      collection
        .find({user_id: req.user._id.toString()})
        .toArray()
        .then(words => res.json(words), next);
    });
  }
};
