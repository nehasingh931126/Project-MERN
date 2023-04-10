const express = require("express");
const PLACE_JSON = require("./json-file/dummy.json"); 
const router = express.Router();

router.get("/user/:userId", (req, res, next) => {
  const { userId } = req.params;
  const place = PLACE_JSON.find((place) => place.creator == userId);
//   if(!place) {
//     return res.status(404).json({message: 'Could not find a place for the provided userid.'});
//   }
if (!place) {
  const error = new Error("Could not find a place for the provided UserId.");
  error.code = 404;
  return next(error);
}

  res.status(200).json({ places });
});

router.get('/:placeId', (req, res, next)=> {
    const placeId= req.params.placeId;
    const place = PLACE_JSON.find((p) => p.id == placeId);
    // if (!place) {
    //   return res
    //     .status(404)
    //     .json({ message: "Could not find a place for the provided id." });
    // }
    if(!place) {
        const error = new Error('Could not find a place for the provided Id.');
        error.code = 404
        throw(error)
    }
    res.status(200).json({place});
});



module.exports = router

