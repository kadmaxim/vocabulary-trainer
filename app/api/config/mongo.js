const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb://vocabulary_trainer:hs-augsburg@ds129926.mlab.com:29926/heroku_w9jxthq8"; // Connection url
const dbName = "heroku_w9jxthq8"; // Database Name

module.exports = {
  db: function(collectionName) {
    return MongoClient.connect(url, { useNewUrlParser: true })
      .then(conn => conn.db(dbName))
      .then(db => db.collection(collectionName));
  },
  objID: require("mongodb").ObjectID
};
