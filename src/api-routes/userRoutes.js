const express = require('express');
const dbusers = require("../services/Users")
const router = express.Router();


router.get('/CreateNewUser', function (req, res) {
    res.send(dbusers.CreateNewUser())
});

router.get('/GetAllUsers', function (req, res) {
    res.send(dbusers.GetAllUsers())
});

router.post('/CreateAdminUser', function (req, res) {
    res.send('Post user controller');
});

module.exports = router;