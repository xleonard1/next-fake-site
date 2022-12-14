import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';


var Schema = mongoose.Schema;

var user = new Schema(
  {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
 },
 {
  toJSON: {
    getters: true,
  },
  id: false,
 }
);

// user.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// user.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };



mongoose.models = {};

var User = mongoose.model('User', user);

export default User;