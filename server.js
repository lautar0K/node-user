const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const passport = require("passport");
const flash("connect-flash");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const configDV = require("./config/database.js");

//configuration
mongoose.connect(configDB.url);

//require("./config/passport")(passport);

app.use(morgan("dev")); //log requests to console
app.use(cookieParser()); //read cookie
app.use(bodyParser()); //get information from html forms

app.set("view engine", "ejs");

app.use(session({ secret: "1234" }));
app.use(passport.initialize());
app.use(passport.session()); //persistent login
app.use(flash());

//routes
require("./app/routes.js")(app, passport); //loads app and passes it to passport

//launch
app.listen(port);
console.log("Working on port " + port);
