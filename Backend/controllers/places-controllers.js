const PLACE_JSON = require("../json-file/dummy.json");
const HttpError = require("../model/http-error");

const getPlaceById = (req, res, next) => {
  const placeId = req.params.placeId;
  const place = PLACE_JSON.find((p) => p.id == placeId);
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
  const place = PLACE_JSON.find((place) => place.creator == userId);
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

  res.status(200).json({ places });
};


exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
