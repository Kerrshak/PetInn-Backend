const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("./passport");
const bcryptJs = require("bcryptjs");
const User = require("./user.model");

dotenv.config();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Routes
app.post("/signup", (req, res) => {
  bcryptJs.hash(req.body.password, 10, (err, hashedPassword) => {
    new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) console.log(err);
    });
  });

  res.send({ user: req.body });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send({ username: req.user.username });
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

module.exports = app;
