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
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
// username이 존재하지 않으면 회원가입, 있으면 로그인
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUsername = req.body.username;
        const user = yield User_1.default.find({ username: findUsername });
        if (user.length === 0) {
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
            const findUser = user[0];
            const result = {
                "id": findUser.id,
                "username": findUser.username
            };
            return res.status(200).json(result);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500
        });
    }
}));
// router.get('/', async(req, res) => {
//   try {
//     // const data = await User.find({where: {username: "다운"}})
//     // const data = await User.find({where: {username: "down"}}).exec()
//     const data = await User.find()
//     console.log(data) 
//     return res.status(200).json({message :"eeeeeeee", data})
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       status: 500,
//       message: "스포츠 상세화면 조회 실패"
//     })
//   }
// })
// router.post('/user/addPost', async(req, res) => {
//   try {
//     const user1 = new User();
//     user1.username = "testUser";
//     const post1 = new Post();
//     post1.title = "title1";
//     post1.category = "happy";
//     const post2 = new Post();
//     post2.title = "title2";
//     post2.category = "sad";
//     user1.postList.push(post1);
//     user1.postList.push(post2);
//     await user1.save();
//     await post1.save();
//     await post2.save();
//     const users = await User.find()
//     return res.status(200).send(users)
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       status: 500,
//       message: "스포츠 상세화면 조회 실패"
//     })
//   }
// })
// router.post('/', async(req, res) => {
//     try {
//         const data = new User()
//         data.username = "test"
//         await data.save()
//         const users = await User.find()
//         return res.status(200).send(users)
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//           status: 500,
//           message: "스포츠 상세화면 조회 실패"
//         })
//       }
// })
exports.default = router;
//# sourceMappingURL=login.js.map