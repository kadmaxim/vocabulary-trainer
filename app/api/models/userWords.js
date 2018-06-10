const Mongo = require('./../config/mongo');
const db = Mongo.db('userWords');

module.exports = {
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
  }
};
