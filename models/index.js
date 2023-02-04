const router = require('express').Router();
const thoughtSchema = require('./Thoughts');
const userSchema = require('./Users');

router.use('/thoughts', thoughtSchema);
router.use('/users', userSchema);


module.exports = router;
