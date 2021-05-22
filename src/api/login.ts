import express from "express";
import Post from "../models/Post";
import User from "../models/User"
const router = express.Router();

// username이 존재하지 않으면 회원가입, 있으면 로그인
router.post('/', async(req, res) => {

  try {
    const findUsername = req.body.username;
    const user = await User.find({username: findUsername});

    if (user.length === 0) {
      // 회원 가입
      const newUser = new User();
      newUser.username = findUsername;
      const createdUser = await newUser.save();
      console.log("sign up");
      return res.status(200).json(createdUser);
    
    } else {
      // 로그인
      const findUser = user[0];
      console.log("login");
      return res.status(200).json(findUser);
    }

  } catch(error) {
    console.log(error);
    return res.status(500).json({
      status: 500
    })
  } 
})

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

export default router;