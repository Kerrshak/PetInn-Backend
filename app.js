const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("./middleware/passport");
const userRouters = require("./routes/user.routes");
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
app.use("/api/users", userRouters);
app.use("/api/sitters", sitterRouters);
app.use("/api/reviews", reviewRoutes);
app.use("/api/owners", ownerRouters);

app.all("/*", (req, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.log("error boys");
	console.log(err);
	console.log(Object.keys(err));
	if (err.path === "_id") {
		console.log("invalid id");
	}
});

module.exports = app;
