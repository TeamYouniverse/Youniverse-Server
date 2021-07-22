"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
/**
 *  @route GET api/user/:id
 *  @desc Get post by ID
 *  @access Private
 */
//  router.get("/", async (req: Request, res: Response) => {
//     res.send("응답");
//   });
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        //const { id } = req.params;
        // console.log(id);\
        // const newPost = new Post();
        // newPost.title = "test123";
        // newPost.category = "sad";
        // newPost.content = "abcdse";
        // newPost.user = req.params.id;
        // await newPost.save();
        if (!user) {
            return res.status(404).json({ msg: "해당하는 유저가 없습니다." });
        }
        // res.json(user);
        const posts = yield Post_1.default.find({ user: req.params.id });
        const groups = posts.reduce((a, c) => {
            a[c.category] = a[c.category] || [];
            a[c.category].push(c);
            return a;
        }, {});
        const result = {
            "id": req.params.id,
            "username": user.username,
            "postList": groups
        };
        return res.status(200).json(result);
    }
    catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(500).send("Server Error");
    }
}));
module.exports = router;
//# sourceMappingURL=user.js.map