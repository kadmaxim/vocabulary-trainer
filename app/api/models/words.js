const Mongo = require('./../config/mongo');
const db = Mongo.db('words');

module.exports = {
    add : function (req, res, next) {
        let word = req.body;

        db.then(collection => {
            collection.insertOne(word).then(res.end("OK"), next)
        });
    },
    del : function (req, res, next) {
        let wordID = new Mongo.objID(req.params.id);

        db.then(collection => {
            collection.deleteOne({'_id':wordID}).then(res.end("OK"), next)
        });
    },
    update : function (req, res, next) {
        let wordID = new Mongo.objID(req.params.id);
        let { original, translation, img_url } = req.body;

        db.then(collection => {
            collection.updateOne({'_id':wordID}, { $set: { original, translation, img_url } }).then(res.end("OK"), next);
        });
    },
    get : function (req, res, next) {
        let wordID = new Mongo.objID(req.params.id);
        db.then(collection => {
            collection.find({'_id':wordID}).toArray().then(words => res.json(words), next)
        });
    },
    loadAll : function () {
        return new Promise((resolve, reject) => {
            db.then(collection => {
                collection.find().toArray().then(resolve, reject);
            });
        });
    },
    getAll : function (req, res, next) {
        db.then(collection => {
            collection.find().toArray().then(words => res.json(words), next)
        });
    }
};
