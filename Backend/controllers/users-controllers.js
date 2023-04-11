const HttpError = require("../model/http-error");
const {v4: uuid} = require('uuid');
const UserModel = require('../model/users');
const DUMMY_JSON = [{
    id: 'u1',
    name: 'ns',
    email: 'ns.ps@gmail.com',
    password: "test"
}]
const getUsers = (req, res, next) => {
  return res.json({ users: DUMMY_JSON });
};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(422);
      throw new HttpError("Invalid input passed, please check your data", 422);
    }
    const {name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({email: email});
    } catch (error) {
      return next(new HttpError('Singup failed, please try again later'))
    }
     
    const newUser = {
        id: uuid(),
        name,
        email,
        password
    }
    DUMMY_JSON.push(newUser);
    return res.status(201).json({ user: newUser });
};

const login = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(422);
      throw new HttpError("Invalid input passed, please check your data", 422);
    }
    const {email, password} = req.body;
    const identifiedUser = DUMMY_JSON.find(user=> user.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      throw new HttpError(
        "Could not identify user, credentials seem to be wrong.",
        401
      );
    }
    res.json({message: "login successful"})
};


module.exports.getUsers = getUsers;
module.exports.signup = signup;
module.exports.login = login;