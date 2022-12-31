
import path from "path";
import express from "express";
import * as index from "./routes/index";
import * as user from "./routes/user";
import dotenv from "dotenv";
import fs from 'fs';

if (fs.existsSync(".env")) {
  console.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  console.debug("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}


var app = express();

app.locals.blog = {
  title: "test"
};

const port = process.env.PORT || 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.index);
app.get('/users', user.list);
app.get('/users/copy', user.copy);

app.listen(port, function(){
  const datetime = new Date().toUTCString();
  console.log(datetime, '-',`server starting on ${port}`);
});