const { Router } = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json");
require("dotenv").config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FB_RTDB_URL
  });
}

const router = Router();

router.post("/sessionLogin", function(req, res) {
  const idToken = req.body.idToken;
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
    })
    .then(sessionCookie => {
      res.cookie("__session", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        sameSite: "lax"
      });
      res.end(JSON.stringify({ status: "Success" }));
    })
    .catch(error => {
      if (error) {
        console.error("SERVER_SESSION-LOGINN_ERROR: ", error);
        res.status(401).send("UNAUTHORIZED REQUEST");
      }
    });
});

module.exports = router;
