const express = require("express");
const placesController = require('../controllers/places-controllers');

const router = express.Router();

router.get("/user/:userId", placesController.getPlaceByUserId);

router.get("/:placeId", placesController.getPlaceById);

router.post("/", placesController.createPlace);

router.patch("/:placeId", placesController.updatePlaceById);

router.delete("/:placeId", placesController.deletePlaceById);

module.exports = router

