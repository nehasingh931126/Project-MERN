const express = require("express");
const {check} = require('express-validator');

const placesController = require('../controllers/places-controllers');

const router = express.Router();

router.get("/user/:userId", placesController.getPlaceByUserId);

router.get("/:placeId", placesController.getPlaceById);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({min: 5}),
    check("address").not().isEmpty(),
  ],
  placesController.createPlace
);

router.patch(
  "/:placeId",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 })
  ],
  placesController.updatePlaceById
);

router.delete("/:placeId", placesController.deletePlaceById);

module.exports = router

