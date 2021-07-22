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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
// username이 존재하지 않으면 회원가입, 있으면 로그인
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUsername = req.body.username;
        const user = yield User_1.default.findOne({ username: findUsername });
        if (user == null) {
            // 회원 가입
            const newUser = new User_1.default();
            newUser.username = findUsername;
            const createdUser = yield newUser.save();
            const result = {
                "id": createdUser.id,
                "username": createdUser.username
            };
            return res.status(200).json(result);
        }
        else {
            // 로그인
            const findUser = user;
            const result = {
                "id": findUser.id,
                "username": findUser.username
            };
            return res.status(200).json(result);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var open = require('open');
    open('https://www.naver.com');
    res.send(200);
}));
module.exports = router;
//# sourceMappingURL=login.js.map