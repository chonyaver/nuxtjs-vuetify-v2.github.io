const { Router } = require("express");

const router = Router();

router.get("/sessionLogout", function(req, res) {
  delete req.session.uid;
  delete req.decodedClaims;
  res.clearCookie("__session");
  res.end(JSON.stringify({ status: "Success" }));
});

module.exports = router;
