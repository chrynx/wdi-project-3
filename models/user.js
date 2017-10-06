const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: String,
  coverPicture: String,
  summary: String,
  origin: String,
  password: { type: String },
  facebookId: { type: String, unique: true }
});

userSchema
  .virtual('locations', {
    ref: 'Location',
    localField: '_id',
    foreignField: 'createdBy'
  });
userSchema
  .virtual('cities', {
    ref: 'City',
    localField: '_id',
    foreignField: 'createdBy'
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.facebookId) this.invalidate('password', 'Password is required');
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
