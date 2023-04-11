const HttpError = require("../model/http-error");
const { v4: uuid } = require("uuid");
const UserModel = require("../model/users");
const {validationResult}  = require('express-validator');


const getUsers = async (req, res, next) => {
  let userList;
  try{
    userList = await UserModel.find({}, '-password');
  } catch(error) {
    const errorObject = new HttpError('Could not fetch list, something went wrong', 500);
    return next(errorObject);
  }
  
  return res.json({ users: userList.map(user=>user.toObject({getters: true}))});
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(422);
    return next(new HttpError("Invalid input passed, please check your data", 422));
  }
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await UserModel.findOne({ email: email });
  } catch (error) {
    return next(new HttpError("Signup failed, please try again later"));
  }
  console.log(existingUser);
  if (existingUser) {
    return next(
      new HttpError("User exists already, please login instead", 500)
    );
  }
  let newUser;

  try {
    newUser = new UserModel({
      name,
      email,
      password,
      image: "https://image.com",
      places: [],
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    return next(
      new HttpError("Signup failed, please try later", 422)
    );
  }

  return res.status(201).json({ user: newUser.toObject({getters: true}) }); // this code of toObject removes the underscore from _id property
};

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(422);
    return next(new HttpError("Invalid input passed, please check your data", 422));
  }
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await UserModel.findOne({email});
  }  catch (error) {
    return next(new HttpError('Could not login, something when wrong', 500))
  }

  console.log(existingUser);

  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError(
      "Could not identify user, credentials seem to be wrong.",
      401
    ));
  }
  res.json({ message: "login successful" });
};

module.exports.getUsers = getUsers;
module.exports.signup = signup;
module.exports.login = login;
