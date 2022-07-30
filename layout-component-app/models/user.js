import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

})

export default mongoose.models.User || mongoose.model('Pet', UserSchema)