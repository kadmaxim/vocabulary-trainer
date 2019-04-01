const MongoClient = require("mongodb").MongoClient;
const url =""; // Connection url
const dbName = ""; // Database Name

module.exports = {
  db: function(collectionName) {
    return MongoClient.connect(url, { useNewUrlParser: true })
      .then(conn => conn.db(dbName))
      .then(db => db.collection(collectionName));
  },
  objID: require("mongodb").ObjectID
};
