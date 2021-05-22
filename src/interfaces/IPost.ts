import mongoose from "mongoose";

export interface IPost{
    category:string;
    title:string;
    content :string;
}