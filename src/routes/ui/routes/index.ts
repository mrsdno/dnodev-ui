import Express from "express"
const router = Express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'dno.dev' });
});

/* GET daily planner */
router.get('/dailyplanner', function (req, res, next) {
  res.render("dailyplanner", { title: 'A daily planner by Christine DNO' });
})

export{ router};

