const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json");
require("dotenv").config();

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FB_RTDB_URL
  });
}

const csrfMiddleware = csrf({ cookie: true });
const session = expressSession({
  secret: "metang",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3000000,
    secure: false
  }
});

const app = express();

app.use(cookieParser());
app.use(csrfMiddleware);
app.use(session);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("/*", function(req, res, next) {
  res.cookie("csrfToken", req.csrfToken());
  next();
});

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/account", function(req, res) {
  return res.render("/account");
});

app.post("/sessionLogin", function(req, res) {
  const idToken = req.body.idToken;
  const csrfToken = req.body.csrfToken;

  if (csrfToken !== req.cookies.csrfToken) {
    res.status(401).send("UNAUTHORIZED REQUEST!");
    return;
  }

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .verifyIdToken(idToken, true)
    .then(decodedClaims => {
      if (
        new Date().getTime() / 1000 - decodedClaims.auth_time <
        5 * 60 * 1000
      ) {
        return admin.auth().createSessionCookie(idToken, { expiresIn });
      }
      throw new Error("AUTHORIZED EXPIRED!");
    })
    .then(sessionCookie => {
      res.cookie("__session", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true
      });
      res.end(JSON.stringify({ status: "Success" }));
    })
    .catch(error => {
      if (error) {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    });
});

app.get("/check-auth", function(req, res) {
  const sessionCookie = req.cookies.__session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(decodedClaims => {
      req.session.uid = decodedClaims.sub;
      req.decodedClaims = decodedClaims;
      res.end(
        JSON.stringify({
          status: "Success",
          decodedClaims: { ...decodedClaims }
        })
      );
    })
    .catch(error => {
      res.status(401).send("UNAUTHORIZED REQUEST!");
    });
});

app.get("/sessionLogout", function(req, res) {
  delete req.session.uid;
  delete req.decodedClaims;
  res.clearCookie("__session");
  res.end(JSON.stringify({ status: "Success" }));
});

module.exports = {
  path: "/api",
  handler: app
};
