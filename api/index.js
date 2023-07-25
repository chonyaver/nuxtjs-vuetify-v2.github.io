/* eslint-disable no-unused-vars */
const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json");
require("dotenv").config();

const sessionLogin = require("./routes/sessionLogin");
const sessionLogout = require("./routes/sessionLogout");
const checkAuth = require("./routes/checkAuth");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FB_RTDB_URL
  });
}

const cookie = cookieParser();
const session = expressSession({
  secret: "metang",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 300000,
    secure: false
  }
});
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const app = express();

app.use(cookie);
app.use(session);
app.use(urlencoded);
app.use(jsonParser);

// const baseUrl = process.env.BASE_URL;

//app.use(function(req, res, next) {
//  const csrfToken = Math.random().toString(32);
//  if (req.url.startsWith(baseUrl)) {
//    res.cookie("csrfToken", csrfToken, { sameSite: "lax" });
//    next();
//  }
//});

app.all("/*", function(req, res, next) {
  const csrfToken = Math.random().toString(32);
  req.session.csrfToken = csrfToken;
  res.cookie("csrfToken", csrfToken, { sameSite: "lax" });
  next();
});

app.use(sessionLogin);
app.use(sessionLogout);
app.use(checkAuth);

module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});

//if (Module.runMain()) {
//  const hostname = process.env.BASE_URL;
//  app.listen(hostname, function() {
//    console.log(`Server listening on: ${hostname}`);
//  });
//}
