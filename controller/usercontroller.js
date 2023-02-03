const { Users, Thoughts } = require('../models');

module.exports = {
    getAllusers(req, res) {
      Users.find()
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },   
    getSingleuser(req, res) {
      Users.findOne({ _id: req.params.id })
        .select('-__v')
        .then((userData) =>
          res.json(userData)
    )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
      Users.create(req.body)
        .then((userData) => res.json(userData))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    deleteUser(req, res) {
      Users.findOneAndDelete({ _id: req.params.id })
        .then((userData) =>
          !userData
            ? res.status(404).json({ message: 'No user with that ID' })
            : Users.deleteMany({ _id: { $in: userData } })
        )
        .then(() => res.json({ message: 'All users deleted!' }))
        .catch((err) => res.status(500).json(err));
    },   
    updateUser(req, res) {
        Users.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((userData) =>
          !userData
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
  