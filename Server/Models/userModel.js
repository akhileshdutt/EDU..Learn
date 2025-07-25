import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
    }
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model('User', userSchema);
export default User;
