const mongoClient = require('mongodb').MongoClient;


exports.getUsers = (req,res) => {
   res.json([{name:'raqib hasan'}]);
} 

exports.addUser = (req,res) => {
   res.json(res.body);
}

exports.updateUser = (req,res) => {
    res.json(res.body);
 }

exports.deleteUser = (req,res) => {
    res.json(res.body);
 }

