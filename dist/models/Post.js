"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
    }
});
exports.default = mongoose_1.default.model("Post", PostSchema);
//# sourceMappingURL=Post.js.map