const router = require('express').Router();
const {
  getThought,
  getSinglethought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction, 
  removeThought
  
} = require('../../controller/thoughtcontroller');


router.route('/').get(getThought).post(createThought);
// router.route("/").get(getThought)

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
// router.route("/:userId/thoughts").put(addThought);

// /api/users/:userId/users/:userId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);


router.route("/:id/thoughts").put(updateThought)



module.exports = router;
