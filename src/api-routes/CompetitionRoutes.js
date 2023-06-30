const express = require('express');
const router = express.Router();
const dbcomp = require("../services/Competition")

router.post('/CreateNewCompetition', async function (req, res) {
    await dbcomp.CreateNewCompetition(req.query["name"], req.query["description"], req.query["fees"]);
    res.send("sent");
});

router.delete('/DeleteCompetition', function (req, res) {
    res.status(200).send('Delete Competition Controller');
});

module.exports = router;