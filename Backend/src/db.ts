import mongoose, {model, Schema} from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// Fix: Add your MongoDB connection string here
const MONGO_URL = process.env.MONGO_URL || "";

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
      type: String,
      required: true,
      unique: true
    },
    expiresAt: {
      type: Date,
      required: true,
      // Index will automatically delete expired tokens
      expires: 0
    }
});
  
export const TokenBlacklistModel = mongoose.model("TokenBlacklist", tokenBlacklistSchema);

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);