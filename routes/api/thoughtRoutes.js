const router = require('express').Router();
const {
  getThought,
  getSinglethought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controller/thoughtcontroller');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSinglethought)
  .put(updateThought)
  .delete(deleteThought);

  // reaction routes
router.route("/addReaction/:thoughtId").put(addReaction);

// delete reaction routes
router.route("/removeReaction/:thoughtId/:reactionId").delete(removeReaction);


module.exports = router;
