let DUMMY_JSON = require("../json-file/dummy.js");
const HttpError = require("../model/http-error");
const { v4: uuid } = require("uuid");

const getPlaceById = (req, res, next) => {
  const placeId = req.params.placeId;
  const place = DUMMY_JSON.find((p) => p.id == placeId);
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
  res.status(200).json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const { userId } = req.params;
  const place = DUMMY_JSON.find((place) => place.creator == userId);
  //   if(!place) {
  //     return res.status(404).json({message: 'Could not find a place for the provided userid.'});
  //   }
  // if (!place) {
  //   const error = new Error("Could not find a place for the provided UserId.");
  //   error.code = 404;
  //   return next(error);
  // }

  if (!place) {
    next(new HttpError("Could not find a place for the provided UserId.", 404));
  }

  res.status(200).json({ place });
};

const createPlace = (req, res, next)=> {
  const {title, description, coordinates, address, creator} = req.body;
  const createdPlace = {
    id:uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };
  DUMMY_JSON.push(createdPlace); //unshift(createPlace);
  res.status(201).json({ places: createdPlace });
}

const updatePlaceById = (req, res, next) => {
  const {placeId} = req.params;
  const {title, description} = req.body;
  const updatedPlace = {...DUMMY_JSON.find(place=> place.id == placeId)};
  const placeIndex = DUMMY_JSON.findIndex((place) => place.id == placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_JSON[placeIndex] = updatedPlace;

  res.status(200).json({place: updatedPlace});
};

const deletePlaceById = (req, res, next) => {
  const {placeId} = req.params;
  // DUMMY_JSON.splice(DUMMY_JSON.findIndex((place) => place.id === placeId), 1);
  DUMMY_JSON = DUMMY_JSON.filter((place) => place.id !== placeId);
  res.status(200).json({message: `Deleted the record for ${placeId}`});
};
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlaceById = deletePlaceById;

