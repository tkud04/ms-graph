var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  res.send('Contacts for the logged in user will appear here');
});

module.exports = router;
