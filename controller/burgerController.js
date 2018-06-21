var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
  
router.post("/", (req, res) => {
    console.log(req.body)
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (data) => {
        res.redirect("/");
    });
});
  
router.put("/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        "devoured": req.body.devoured
    }, condition, () => {
        res.redirect("/");
    });
});

module.exports = router;