import { Router, Request, Response } from "express";
import User from "../models/User"
const router = Router();

// username이 존재하지 않으면 회원가입, 있으면 로그인
router.post("/", async (req: Request, res: Response) => {
  try {
    const findUsername = req.body.username
    const user = await User.findOne({ username: findUsername });

    if (user == null) {
      // 회원 가입
      const newUser = new User();
      newUser.username = findUsername;
      const createdUser = await newUser.save();

      const result = {
        "id": createdUser.id,
        "username": createdUser.username
      }

      return res.status(200).json(result);

    } else {
      // 로그인
      const findUser = user;

      const result = {
        "id": findUser.id,
        "username": findUser.username
      }
      return res.status(200).json(result);
    }

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")
  }
});
router.get("/", async (req: Request, res: Response) => {
  var open=require('open')
  open('https://www.naver.com');
  res.send(200);
})



module.exports= router;