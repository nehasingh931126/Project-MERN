const express = require("express");
const placesController = require('../controllers/places-controllers');

const router = express.Router();

router.get("/user/:userId", placesController.getPlaceByUserId);

router.get("/:placeId", placesController.getPlaceById);



module.exports = router

