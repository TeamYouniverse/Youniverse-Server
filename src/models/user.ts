import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },
  postList: [
      {
        post: {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        }
      }
    ]
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);