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


module.exports = router;