const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true,required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: { type: String, required: true },
});

// UserSchema.plugin(uniqueValidator); // this is to validate only one email address is present in the database 

module.exports = mongoose.model('User', UserSchema);


