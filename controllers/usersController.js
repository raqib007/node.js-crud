const db = require('../models');
const User = db.users;

exports.getUsers = (req, res) => {
   User.find()
      .then(data => {
         res.send(data);
      })
      .catch(error => {
         res.status(500).send({ message: error.message || 'Some error occured while retrieving users' })
      });
}

exports.getUser = (req, res) => {
   const id = req.body.id;
   User.findById(id)
      .then(data => {
         if (!data) {
            res.status(404).send({ message: 'No records using id ' + id })
         } else {
            res.send(data);
         }
      })
      .catch(error => {
         res.status(500).send({
            message: error.message || 'Error retrieving record with id ' + id
         })
      })
}

exports.addUser = (req, res) => {

   if (!req.body.email && !req.body.first_name && !req.body.password) {
      res.status(400).send({ message: 'Content cant be empty!' });
   }

   const user = new User({
      id: Math.random(99999999) + new Date().getMilliseconds(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
   });

   user.save(user)
      .then(data => {
         res.send(data);
      })
      .catch(error => {
         res.status(500).send({
            message:
               error.message || "Some error occurred while creating the User."
         });
      })
}

exports.updateUser = (req, res) => {
   if (!req.body) {
      res.status(404).send({
         message: 'data to update cant be empty'
      });
   }

   User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
      .then(data => {
         if (!data) {
            res.status(404).send({
               message: 'Cant update using id ' + req.params.id + "| may be user not found"
            })
         } else {
            res.send({
               message: 'Record updated successgfully'
            });
         }
      })
      .catch(error => {
         res.status(500).send({
            message: 'Error updating user with id ' + req.params.id
         })
      });
}

exports.deleteUser = (req, res) => {
   User.findByIdAndRemove(req.params.id, { useFindAndModify: false })
      .then(data => {
         if (!data) {
            res.status(404).send({ message: 'Cant delete using id ' + req.params.id + "| may be user not found" })
         } else {
            res.send({ message: 'Record Deleted Successfully' });
         }
      })
      .catch(error => {
         res.status(500).send({
            message: 'Error deleting user with id ' + req.params.id
         })
      })
}

