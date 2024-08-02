import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  caste: { type: String, required: true },
});
console.log("initialized")
const User = mongoose.model('User', userSchema);

export default User;
