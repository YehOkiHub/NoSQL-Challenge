const router = require('express').Router();
const {
  getAllusers,
  getSingleuser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend

  
} = require('../../controller/usercontroller');

// /api/users
router.route("/").get(getAllusers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleuser).delete(deleteUser);

// Update User
router.route("/updateUser/:userId").put(updateUser);

router.route("/:userId/friends/:friendId").post(createFriend);

router.route("/:userId/friends/:friendId").delete(deleteFriend);






module.exports = router;