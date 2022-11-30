var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'dno.dev' });
});

/* GET daily planner */
router.get('/dailyplanner', function (req, res, next) {
  res.render("dailyplanner", { title: 'A daily planner by Christine DNO' });
})

module.exports = router;

