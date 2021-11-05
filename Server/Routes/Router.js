const router = require("express").Router();
const Info = require("../Model/Info");


// GET ALL
router.get("/", async (req, res) => {
    try {
        const info = await Info.find();
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const info = await Info.findById(req.params.id);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/", async (res, req) => {
    try {
        const info = await Info.findOne(end_year);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;