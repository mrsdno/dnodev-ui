import Express from "express"
import path from "path";
const router = Express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

/* GET daily planner */
router.get('/dailyplanner', function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/dailyPlanner.html"));
})

export{ router};

