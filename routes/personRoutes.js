const express = require("express");
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

const router = express.Router();

router.post("/api", createPerson);
router.get("/api/:user_id", getPerson);
router.put("/api/:user_id", updatePerson);
router.delete("/api/:user_id", deletePerson);

module.exports = router;
