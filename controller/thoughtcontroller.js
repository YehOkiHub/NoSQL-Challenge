const { Users, Thoughts } = require('../models');

module.exports = {
  // Get all courses
  getThought(req, res) {
    Thoughts.find()
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSinglethought(req, res) {
    Thoughts.findOne({ _id: req.params.id })
      .select('-__v')
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.id })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thoughts.deleteMany({ _id: { $in: userData  } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
