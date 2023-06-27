const express = require('express');
const router = express.Router();


router.post('/CreateNewCompetition', function (req, res) {
    console.log(req.query)
    res.send('Create New Competition Controller');
});

router.delete('/DeleteCompetition', function (req, res) {
    res.send('Delete Competition Controller');
});

module.exports = router;