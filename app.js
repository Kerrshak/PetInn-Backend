const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("./middleware/passport");
const userRouters = require("./routes/user.routes");
const apiRouter = require("./routes/api.routes");
const sitterRouters = require("./routes/sitter.routes");
const reviewRoutes = require("./routes/review.routes");
const ownerRouters = require("./routes/owner.routes");

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
app.use("/api", apiRouter);
app.use("/api/users", userRouters);
app.use("/api/sitters", sitterRouters);
app.use("/api/reviews", reviewRoutes);
app.use("/api/owners", ownerRouters);

module.exports = app;
