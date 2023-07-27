const express = require('express');
const dbusers = require("../services/Users")
const router = express.Router();

router.post('/CreateNewUser', async function (req, res) {
    res.send(await dbusers.CreateNewUser(req.query["gender"],
                                         req.query["level"],
                                         req.query["Grand_Entry"],
                                         req.query["Event"],
                                         req.query["Role_Name"],
                                         req.query["FirstName"],
                                         req.query["LastName"],
                                         req.query["Age"],
                                         req.query["Email"],
                                         req.query["SchoolName"],
                                         ));
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
