const router = require('express').Router();
const {
  getThought,
  getSinglethought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controller/thoughtcontroller');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSinglethought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
