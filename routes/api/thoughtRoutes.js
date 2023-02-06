const router = require('express').Router();
const {
  getThought,
  getSinglethought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
  addThought,
  removeThought
} = require('../../controller/thoughtcontroller');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSinglethought)  
  .delete(deleteThought);

  // reaction routes
router.route("/addReaction/:thoughtId").put(addReaction);

// delete reaction routes
router.route("/removeReaction/:thoughtId/:reactionId").delete(removeReaction);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/users/:userId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);


router.route("/:userId/thoughts").put(updateThought)



module.exports = router;
