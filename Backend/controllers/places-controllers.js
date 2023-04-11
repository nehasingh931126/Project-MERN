let DUMMY_JSON = require("../json-file/dummy.js");
const HttpError = require("../model/http-error");
const { v4: uuid } = require("uuid");
const {validationResult}  = require('express-validator');
const {getCoordsForAddress} = require('../utils/location');
const PlaceModel = require('../model/place');
const UserModel = require("../model/users");
const { default: mongoose } = require("mongoose");


const getPlaceById = async (req, res, next) => {
  const placeId = req.params.placeId;
  console.log(placeId);
  let place;
  try{
    place = await PlaceModel.findById(placeId);
    console.log(place);
  } catch(error) {
    const errorObject = new HttpError('Something went wrong, cannot find place', 500);
    return next(errorObject);
  }
  
  // const place = DUMMY_JSON.find((p) => p.id == placeId);
  // if (!place) {
  //   return res
  //     .status(404)
  //     .json({ message: "Could not find a place for the provided id." });
  // }
  // if(!place) {
  //     const error = new Error('Could not find a place for the provided Id.');
  //     error.code = 404
  //     throw(error)
  // }

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }
  res.status(200).json({ place: place.toObject({getters: true})});
};

const getPlaceByUserId = async (req, res, next) => {
  const { userId } = req.params;
  let places;

  try{
    places = await PlaceModel.find({creator: userId});
  } catch(error) {
    const errorObject = new HttpError("Fetching places failed please try again later", 500);
    return next(errorObject);
  }
  if (!places || places.length ===0) {
    return next(new HttpError("Could not find a place for the provided UserId.", 404));
  }

  res.status(200).json({ places: places.map(place=> place.toObject({getters: true})) });
};

const createPlace = async (req, res, next)=> {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    console.log(422);
    return next(new HttpError("Invalid input passed, please check your data", 422));
  }

  const {title, description, address, creator} = req.body;

  let coordinates;
  try{
    coordinates = await getCoordsForAddress(address);
    console.log(coordinates);
  } catch(error) {
    return next(error)
  }
  const createdPlace = new PlaceModel({
    title,
    description,
    location: coordinates,
    address,
    creator,
    image: 'http://dummy.jimg'
  });

  let user; 
  try {
    user = await UserModel.findById(creator);
  } catch(err) {
    const error = new HttpError('Creating places failed, try again', 500);
    return next(error)
  }

  if (!user) {
    const error = new HttpError("Cannot find user for the provided id", 404);
    return next(error);
  }
  
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await createdPlace.save({session:session});
      user.places.push(createPlace);
      await user.save({ session: session });
      await session.commitTransaction();
    } catch (error) {
      return next(
        new HttpError("Creating places failed, please try again", 500)
      );
    }
  
  res.status(201).json({ places: createdPlace });
}

const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(422);
    throw new HttpError("Invalid input passed, please check your data", 422);
  }
  const {placeId} = req.params;
  const {title, description} = req.body;
  let place;
  try {
    place = await PlaceModel.findById(placeId);
    place.title = title;
    place.description = description;
    await place.save();
  } catch (error) {
    console.log(error);
    const errorObject = new HttpError('Something went wrong, could not update place', 500);
    return next(errorObject);
  }

  res.status(200).json({ place:  place.toObject({getters: true})});
};

const deletePlaceById = async (req, res, next) => {
  const {placeId} = req.params;
  try{
    await PlaceModel.findByIdAndRemove(placeId);
  } catch(error) {
    const errorObject = new HttpError("Cannot delete the record, something went wrong", 500)
    return next(errorObject);
  }
  
  res.status(200).json({message: `Deleted the record for ${placeId}`});
};
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlaceById = deletePlaceById;

