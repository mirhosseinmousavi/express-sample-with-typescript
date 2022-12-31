
import path from "path";
import express from "express";
import * as index from "./routes/index";
import {secondPage} from "./routes/second-page";
import * as user from "./routes/user";
import flash from 'connect-flash';
import dotenv from "dotenv";
import session from 'express-session';
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
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret:'happy dog',
	saveUninitialized: true,
	resave: true
}));

app.use(flash());

app.get('/',  index.index);
app.get('/users', user.list);
app.get('/second-page', secondPage);
app.get('/users/copy', user.copy);

app.listen(port, function(){
  const datetime = new Date().toUTCString();
  console.log(datetime, '-',`server starting on ${port}`);
});