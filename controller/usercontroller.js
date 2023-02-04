const { Users, Thoughts } = require('../models');

const friendCount = async () =>
  User.aggregate()
    .count("FriendCount")
    .then((numberOfFriends) => numberOfFriends);

// Aggregate function for getting the overall grade using $avg
const userThought = async (userId) =>
  User.aggregate([
    // only include the given student by using $match
    { $match: { _id: ObjectId(userId) } },
    {
      $unwind: "$thoughts",
    },
    {
      $group: {
        _id: ObjectId(userId),
      },
    },
  ]);


module.exports = {
//  Get all users
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
            : Users.findOneAndRemove({ _id: { $in: userData } })
        )
        .then(() => res.json({ message: 'User deleted!' }))
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
    addThought(req, res) {
      console.log("You are adding a thought");
      console.log(req.body);
      Users.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thoughts: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: "No user found with that ID :(" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove thought from a user
    removeThought(req, res) {
      Users.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { thought: { thoughtId: req.params.id } } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: "No user found with that ID :(" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
  
  