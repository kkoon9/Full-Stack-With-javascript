const express = require('express');
const router = express.Router();

/**
 *  @route GET api/posts
 *  @desc Test Route
 *  @access Public
 */
router.get('/', function (req, res) {
  res.send('Posts Route');
});

module.exports = router;
