const router = require('express').Router();
const {
  getAllusers,
  getSingleuser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/usercontroller.js');

// /api/courses
router.route('/').get(getAllusers).post(createUser);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSingleuser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
