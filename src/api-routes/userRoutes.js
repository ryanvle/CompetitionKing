const express = require('express');

const router = express.Router();


router.post('/CreateNewUser', function (req, res) {
    console.log(req.query)
    res.send('Success');
});

router.post('/CreateAdminUser', function (req, res) {
    res.send('Post user controller');
});

module.exports = router;