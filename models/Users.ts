import { Schema, model, Document } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
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
    type: Map,
    of: String,
    default: new Map(),
  },
  following: {
    type: Map,
    of: String,
    default: new Map(),
  },
  posts: {
    type: Array,
    default: [],
  },
});

// define interface that describes the schema
export interface UserDoc extends Document {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  igns: string[];
  followers: Map<string, string>;
  following: Map<string, string>;
  posts: string[];
}

const User = model<UserDoc>('user', UserSchema);
export default User;
