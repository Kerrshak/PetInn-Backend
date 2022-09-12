const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("./middleware/passport");
const userRouters = require("./routes/user.routes");
const apiRouter = require("./routes/api.routes");
const reviewRoutes = require("./routes/review.routes");

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

// Routes
app.use("/api", apiRouter);
app.use("/api/users", userRouters);
app.use("/api/reviews", reviewRoutes);

app.all("/*", (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
});

module.exports = app;
