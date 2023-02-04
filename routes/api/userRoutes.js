const router = require('express').Router();
const {
  getAllusers,
  getSingleuser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controller/usercontroller');

// /api/users
router.route("/").get(getAllusers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleuser).delete(deleteUser);

// Update User
router.route("/updateUser/:userId").put(updateUser);

// /api/users/:usertId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/users/:userId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;