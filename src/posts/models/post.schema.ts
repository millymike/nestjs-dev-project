import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  published_at: { type: Boolean, default: false },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});
