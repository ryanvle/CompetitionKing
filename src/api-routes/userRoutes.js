const express = require('express');
const dbusers = require("../services/Users")
const router = express.Router();


router.post('/CreateNewUser', function (req, res) {
    console.log(dbusers.CreateNewUser())
    let name = req.query["Name"];
    console.log(req.query)
    console.log(name)
    res.send('Success');
});

router.post('/CreateAdminUser', function (req, res) {
    res.send('Post user controller');
});

module.exports = router;