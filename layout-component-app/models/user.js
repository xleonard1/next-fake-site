import mongoose from 'mongoose';


let Schema = mongoose.Schema;

var user = new Schema(
  {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
 },
 {
  toJSON: {
    getters: true,
  },
  id: false,
 }
);



mongoose.models = {};

var User = mongoose.model('User', user);

export default User;