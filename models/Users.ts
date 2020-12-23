import { Schema, model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
  nameFirst: {
    type: String,
    required: true,
  },
  nameLast: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  igns: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  posts: {
    type: Array,
    default: [],
  },
});

const User = model('user', UserSchema);

export default User;
