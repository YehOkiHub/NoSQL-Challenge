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

// /api/users Get all users or post an user
router.route("/").get(getAllusers).post(createUser);

// /api/users/:userId Delete and get single User
router.route("/:userId").get(getSingleuser).delete(deleteUser);

// Update User
router.route("/updateUser/:userId").put(updateUser);

//Create friend

router.route("/:userId/friends/:friendId").post(createFriend);

//Delete friend

router.route("/:userId/friends/:friendId").delete(deleteFriend);






module.exports = router;