const express = require('express');
const PLACE_JSON = require('./json-file/dummy.json');
const router = express.Router();

router.get(':/userId', (req, res, next)=>{
    const {userId} = req.params;
    const placesById = PLACE_JSON.find((place) => place.creator == userId);
    res.status(200).send({placesById});
})

module.exports = router;
