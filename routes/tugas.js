var  express = require('express');
var  router = express.Router();

router.get('/tugas', function(req, res, next) {
    res.render('pages/tugas');
  });

  module.exports = router;

