import mongoose from "mongoose";
import {IPost} from "../interfaces/IPost";

const PostSchema= new mongoose.Schema({
    category:{
        type:String,
    },
    title:{
        type:String,
    },
    content:{
        type:String,
    }
});

export default mongoose.model<IPost & mongoose.Document>("Post",PostSchema);