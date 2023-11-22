const router = require("express").Router();

router.get("/accounttest", (req, res) => {
    res.send("account test successful");
});

module.exports = router;