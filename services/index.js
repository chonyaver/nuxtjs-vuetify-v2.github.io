const admin = require("firebase-admin");
const serviceAccount = require("../");
require("dotenv").config();

module.exports = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FB_RTDB_URL
    })
  : admin.app();
