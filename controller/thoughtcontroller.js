const Thoughts = require("../models/Thoughts");
const Users = require("../models/Users");

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thoughts.find()
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
      });

    // res.status(500).json(err)
  },
  // Get a thought
  getSinglethought(req, res) {
    Thoughts.findOne({ _id: req.params.id })
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
  // Delete a thought
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.id })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with that ID" })
          : Users.deleteMany({ _id: { $in: thoughtData.users } })
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

  // Remove thought from a user
  removeThought(req, res) {    
    Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { thoughts: { $in: [req.params.thoughtId] } } },
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
      { _id: req.params.thoughtId },
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
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
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
  },
  test(req, res) {
    res.json({ message: "works" });
  }

  // addThought(req, res) {
  //   console.log(req.body.thoughts)
  //   Users.findOneAndUpdate({
  //     _id:req.params.userId
  //   }, {
  //     $addToSet: { thoughts:  {$each:req.body.thoughts} }
  //   });
  //   res.json({message:"thought added to user"})
  // }
};
