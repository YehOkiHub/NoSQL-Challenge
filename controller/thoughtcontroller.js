const Thoughts = require("../models/Thoughts");

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thoughts.find()
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSinglethought(req, res) {
    Thoughts.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No Thought with that ID" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
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
          ? res.status(404).json({ message: "No thought with that ID" })
          : Users.findOneAndDelete({
              thoughts: { $pull: req.params.thoughtID, new: true },
            })
      )
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  addThought(req, res) {
    console.log("You are adding a thought");
    console.log(req.body);
    Thoughts.findOneAndUpdate(
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
  //  Add an reaction to a thought
  addReaction(req, res) {
    console.log("You are adding an reaction");
    console.log(req.body);
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove reactions from thought
  removeReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: { _id: req.params.id } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No Thought found with that ID :(" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  }
};
