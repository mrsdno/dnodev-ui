
import Express from "express";
import path from "path";
import { router } from "./routes/ui/routes/index";


const app = Express();
console.log(__dirname);
// view engine setup
app.set('views', path.join(__dirname, 'routes/ui/views'));
app.set('view engine', 'ejs');

// routers
app.use('/', router);

// ensure public folder is available
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.use('/favicon.ico', Express.static('images/favicon.ico'));


export { app };