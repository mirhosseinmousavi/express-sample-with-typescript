
import path from "path";
import express from "express";
import * as index from "./routes/index";
import * as user from "./routes/user";

var app = express();

const port = process.env.PORT || 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.index);
app.get('/users', user.list);
app.get('/users/copy', user.copy);

app.listen(port, function(){
  console.log(`server starting on ${port}`);
});

