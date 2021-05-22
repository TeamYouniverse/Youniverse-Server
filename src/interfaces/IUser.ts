import mongoose from "mongoose";
import { IPost } from "./IPost";

export interface IUser {
    username : String;
    postList : [IPost];
}