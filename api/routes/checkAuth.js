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

router.get("/checkAuth", function(req, res) {
  const sessionCookie = req.cookies.__session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(
      decodedClaims => {
        req.decodedClaims = decodedClaims;
        req.session.uid = decodedClaims.sub;
        res.end(
          JSON.stringify({
            status: "Success",
            decodedClaims: { ...decodedClaims }
          })
        );
      },
      error => {
        if (error) {
          res.status(401).send("UNAUTHORIZED REQUEST");
        }
      }
    );
});

module.exports = router;
