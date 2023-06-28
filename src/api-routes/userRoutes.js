const express = require('express');
const dbusers = require("../services/Users")
const router = express.Router();


router.post('/CreateNewUser', function (req, res) {
    res.send(dbusers.CreateNewUser())
});

router.get('/GetAllUsers', async function (req, res) {
    res.send(await dbusers.GetAllUsers())
});

router.post('/CreateAdminUser', function (req, res) {
    res.send('Post user controller');
});

router.delete('/DeleteUser', function(req, res) {
    res.send("Delete user controller")
})

module.exports = router;