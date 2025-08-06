const router = require("express").Router();

router.use("/board", require("./board"));

module.exports = router;
